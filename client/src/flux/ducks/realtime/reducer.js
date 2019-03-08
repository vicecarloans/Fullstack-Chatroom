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
};

const rooms = (state = roomInitialState, { type, payload }) => {
	switch (type) {
		case LIST_ALL_ROOMS:
			return { ...state, list: payload.rooms };

		default:
			return state;
	}
};

export default combineReducers({
	status,
	messages,
	rooms,
});
