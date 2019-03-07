import io from 'socket.io-client';
import { SERVER_HOST } from 'constants/api';
import {
	takeLatest,
	call,
	put,
	fork,
	race,
	cancelled,
} from 'redux-saga/effects';
import { eventChannel, delay } from 'redux-saga';
import {
	START_CHANNEL,
	turnServerOff,
	turnServerOn,
	turnChannelOff,
	turnChannelOn,
	STOP_CHANNEL,
	addAnnouncement,
	addInMessage,
	addErrorMessage,
} from './actions';
import {
	connect,
	disconnect,
	reconnect,
	createSocketNotice,
	createSocketMessage,
	createSocketError,
} from 'utils/socket';

const socket = io(SERVER_HOST);

function* listenDisconnectSaga() {
	while (true) {
		yield call(disconnect);
		yield put(turnServerOff());
	}
}

function* listenConnectSaga() {
	while (true) {
		yield call(reconnect);
		yield put(turnServerOn());
	}
}

function* listenServerSaga() {
	try {
		yield put(turnChannelOn());
		const { socket, timeout } = yield race({
			socket: call(connect),
			timeout: delay(5000), //Connection timeout in 5 s
		});
		if (timeout) {
			yield put(turnServerOff());
		}
		const noticeSocketChannel = yield call(createSocketNotice, socket);
		const messageSocketChannel = yield call(createSocketMessage, socket);
		const errorSocketChannel = yield call(createSocketError, socket);
		yield fork(listenDisconnectSaga);
		yield fork(listenConnectSaga);
		yield put(turnServerOn());
		yield takeLatest(noticeSocketChannel, handleAnnoucementSaga);
		yield takeLatest(messageSocketChannel, handleInMessSaga);
		yield takeLatest(errorSocketChannel, handleErrorSaga);
	} catch (err) {
		console.warn(err);
	} finally {
		if (yield cancelled()) {
			socket.disconnect(true);
			yield put(turnChannelOff());
		}
	}
}

function* handleAnnoucementSaga(data) {
	yield put(addAnnouncement(data));
}

function* handleInMessSaga(data) {
	yield put(addInMessage(data));
}

function* handleErrorSaga(data) {
	yield put(addErrorMessage(data));
}

function* racingSaga() {
	yield race({
		task: call(listenServerSaga),
		cancel: takeLatest(STOP_CHANNEL),
	});
}

export function* realtimeSagaWatcher() {
	yield takeLatest(START_CHANNEL, racingSaga);
}