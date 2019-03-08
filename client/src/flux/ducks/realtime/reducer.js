import { combineReducers } from 'redux';
import {
	CHANNEL_ON,
	CHANNEL_OFF,
	SERVER_OFF,
	SERVER_ON,
	ADD_ANNOUNCEMENT,
	ADD_IN_MESSAGE,
	DELETE_IN_MESSAGE,
	ADD_GROUP_CHAT_MESSAGE,
	LIST_ALL_ROOMS,
	REQUEST_SWITCH_ROOM,
	REQUEST_LEAVE_ROOM,
	ADD_ERROR_MESSAGE,
	NEXT_STEP,
	PREV_STEP,
	CLOSE_REG_MODAL,
	CLOSE_ROOM_MODAL,
	REQUEST_CHANGE_USERNAME,
	REQUEST_ADD_MESSAGE_TO_GROUP,
	REQUEST_JOIN_ROOM,
	REGISTER_SID,
	TOGGLE_SWITCH_ROOM_MODAL_ON,
	TOGGLE_SWITCH_ROOM_MODAL_OFF,
} from './actions';
import { ANNOUCEMENT, NORMAL, ERROR } from 'constants/messageTypes';

const statusInitState = {
	server: 'unknown',
	channel: 'off',
};

const status = (state = statusInitState, { type, payload }) => {
	switch (type) {
		case CHANNEL_ON:
			return { ...state, channel: 'on' };
		case CHANNEL_OFF:
			return { ...state, channel: 'off', server: 'unknown' };
		case SERVER_OFF:
			return { ...state, server: 'off' };
		case SERVER_ON:
			return { ...state, server: 'on' };
		default:
			return state;
	}
};

const messagesInitState = {
	logs: [],
	inMess: {
		type: '',
		message: '',
	},
	username: '',
	room: '',
};

const messages = (state = messagesInitState, { type, payload }) => {
	switch (type) {
		case ADD_ANNOUNCEMENT:
			return {
				...state,
				logs: [
					...state.logs,
					{
						type: ANNOUCEMENT,
						message: payload.message,
						author: payload.author,
					},
				],
			};
		case ADD_IN_MESSAGE:
			return {
				...state,
				inMess: {
					type: NORMAL,
					message: payload.message,
				},
				username: payload.username,
				room: payload.room,
			};
		case ADD_ERROR_MESSAGE:
			return {
				...state,
				inMess: {
					type: ERROR,
					message: payload.message,
				},
			};
		case DELETE_IN_MESSAGE:
			return {
				...state,
				inMess: { type: '', message: '' },
			};
		case REQUEST_SWITCH_ROOM:
			return {
				...state,
				logs: [],
			};
		case REQUEST_LEAVE_ROOM:
			return {
				...state,
				logs: [],
			};
		case ADD_GROUP_CHAT_MESSAGE:
			return {
				...state,
				logs: [
					...state.logs,
					{
						type: NORMAL,
						message: payload.message,
						author: payload.author,
					},
				],
			};
		default:
			return state;
	}
};

const roomInitialState = {
	list: {},
	sid: '',
};

const rooms = (state = roomInitialState, { type, payload }) => {
	switch (type) {
		case LIST_ALL_ROOMS:
			return { ...state, list: payload.rooms };
		case REGISTER_SID:
			return { ...state, sid: payload.sid };
		default:
			return state;
	}
};

const stepInitialState = {
	step: 1,
	openRegModal: true,
	openRoomModal: false,
	switchRoomModal: false,
};
const step = (state = stepInitialState, { type, payload }) => {
	switch (type) {
		case NEXT_STEP:
			return {
				...state,
				step: state.step < 2 ? state.step + 1 : state.step,
				openRegModal: false,
				openRoomModal: true,
			};
		case PREV_STEP:
			return {
				...state,
				step: state.step > 1 ? state.step - 1 : state.step,
				openRegModal: true,
				openRoomModal: false,
			};
		case CLOSE_REG_MODAL:
			return { ...state, openRegModal: false };
		case CLOSE_ROOM_MODAL:
			return { ...state, openRoomModal: false };
		case TOGGLE_SWITCH_ROOM_MODAL_ON:
			return { ...state, switchRoomModal: true };
		case TOGGLE_SWITCH_ROOM_MODAL_OFF:
			return { ...state, switchRoomModal: false };
		default:
			return state;
	}
};

const inputInitialState = {
	message: '',
	username: '',
	room: '',
};

const desired = (state = inputInitialState, { type, payload }) => {
	switch (type) {
		case REQUEST_CHANGE_USERNAME:
			return { ...state, username: payload.username };
		case REQUEST_ADD_MESSAGE_TO_GROUP:
			return { ...state, message: payload.message };
		case REQUEST_JOIN_ROOM:
		case REQUEST_SWITCH_ROOM:
			return { ...state, room: payload.room };
		default:
			return state;
	}
};

export default combineReducers({
	status,
	messages,
	rooms,
	step,
	desired,
});
