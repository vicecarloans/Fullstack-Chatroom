export const START_CHANNEL = 'START_CHANNEL';

export const startChannel = () => ({
	type: START_CHANNEL,
});

export const STOP_CHANNEL = 'STOP_CHANNEL';

export const stopChannel = () => ({
	type: STOP_CHANNEL,
});

export const CHANNEL_ON = 'CHANNEL_ON';

export const turnChannelOn = () => ({
	type: CHANNEL_ON,
});

export const CHANNEL_OFF = 'CHANNEL_OFF';

export const turnChannelOff = () => ({
	type: CHANNEL_OFF,
});

export const SERVER_ON = 'SERVER_ON';

export const turnServerOn = () => ({
	type: SERVER_ON,
});

export const SERVER_OFF = 'SERVER_OFF';

export const turnServerOff = () => ({
	type: SERVER_OFF,
});

export const ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT';

export const addAnnouncement = message => ({
	type: ADD_ANNOUNCEMENT,
	payload: {
		message,
	},
});

export const ADD_IN_MESSAGE = 'ADD_IN_MESSAGE';

export const addInMessage = ({ message, username, room }) => ({
	type: ADD_IN_MESSAGE,
	payload: {
		message,
		username,
		room,
	},
});

export const DELETE_IN_MESSAGE = 'DELETE_IN_MESSAGE';

export const deleteInMessage = () => ({
	type: DELETE_IN_MESSAGE,
});

export const ADD_ERROR_MESSAGE = 'ADD_ERROR_MESSAGE';

export const addErrorMessage = message => ({
	type: ADD_ERROR_MESSAGE,
	payload: {
		message,
	},
});

export const ADD_GROUP_CHAT_MESSAGE = 'ADD_GROUP_CHAT_MESSAGE';

export const addMessageToGroupChat = message => ({
	type: ADD_GROUP_CHAT_MESSAGE,
	payload: {
		message,
	},
});

//Active Events

export const LIST_ALL_ROOMS = 'LIST_ALL_ROOMS';

export const listRooms = rooms => ({
	type: LIST_ALL_ROOMS,
	payload: {
		rooms,
	},
});

export const REQUEST_JOIN_ROOM = 'REQUEST_JOIN_ROOM';

export const requestJoinRoom = room => ({
	type: REQUEST_JOIN_ROOM,
	payload: {
		room,
	},
});

export const REQUEST_LEAVE_ROOM = 'REQUEST_LEAVE_ROOM';

export const requestLeaveRoom = () => ({
	type: REQUEST_LEAVE_ROOM,
});

export const REQUEST_SWITCH_ROOM = 'REQUEST_SWITCH_ROOM';

export const requestSwitchRoom = room => ({
	type: REQUEST_SWITCH_ROOM,
	payload: {
		room,
	},
});

export const REQUEST_ADD_MESSAGE_TO_GROUP = 'ADD_MESSAGE_TO_GROUP';

export const requestAddMessageToGroup = message => ({
	type: REQUEST_ADD_MESSAGE_TO_GROUP,
	payload: {
		message,
	},
});

export const REQUEST_CHANGE_USERNAME = 'CHANGE_USERNAME';

export const changeUsername = username => ({
	type: REQUEST_CHANGE_USERNAME,
	payload: {
		username,
	},
});
