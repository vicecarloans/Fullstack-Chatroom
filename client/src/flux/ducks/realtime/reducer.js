import { combineReducers } from 'redux';
import {
	CHANNEL_ON,
	CHANNEL_OFF,
	SERVER_OFF,
	SERVER_ON,
	ADD_ANNOUNCEMENT,
	ADD_IN_MESSAGE,
	DELETE_IN_MESSAGE,
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
};

const messages = (state = messagesInitState, { type, payload }) => {
	switch (type) {
		case ADD_ANNOUNCEMENT:
			return {
				...state,
				logs: [
					...state.logs,
					{ type: ANNOUCEMENT, message: payload.message },
				],
			};
		case ADD_IN_MESSAGE:
			return {
				...state,
				inMess: { type: NORMAL, message: payload.message },
			};
		case DELETE_IN_MESSAGE:
			return {
				...state,
				inMess: { type: '', message: '' },
			};
		default:
			return state;
	}
};

export default combineReducers({
	status,
	messages,
});
