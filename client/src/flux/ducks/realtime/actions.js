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

export const addAnnouncement = ({ message, author }) => ({
	type: ADD_ANNOUNCEMENT,
	payload: {
		message,
		author,
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

export const addMessageToGroupChat = ({ message, author }) => ({
	type: ADD_GROUP_CHAT_MESSAGE,
	payload: {
		message,
		author,
	},
});

export const LIST_ALL_ROOMS = 'LIST_ALL_ROOMS';

export const listRooms = ({ rooms }) => ({
	type: LIST_ALL_ROOMS,
	payload: {
		rooms,
	},
});

export const REGISTER_SID = 'REGISTER_SID';
export const registerSid = ({ sid }) => ({
	type: REGISTER_SID,
	payload: {
		sid,
	},
});

//Active Events

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

export const REQUEST_ADD_MESSAGE_TO_GROUP = 'REQUEST_ADD_MESSAGE_TO_GROUP';

export const requestAddMessageToGroup = message => ({
	type: REQUEST_ADD_MESSAGE_TO_GROUP,
	payload: {
		message,
	},
});

export const REQUEST_CHANGE_USERNAME = 'CHANGE_USERNAME';

export const requestChangeUsername = username => ({
	type: REQUEST_CHANGE_USERNAME,
	payload: {
		username,
	},
});

export const REQUEST_SUBSCRIBE_LIST_ROOM = 'REQUEST_SUBSCRIBE_LIST_ROOM';

export const requestSubscribeListRoom = () => ({
	type: REQUEST_SUBSCRIBE_LIST_ROOM,
});

export const REQUEST_UNSUBSCRIBE_LIST_ROOM = 'REQUEST_UNSUBSCRIBE_LIST_ROOM';

export const requestUnsubscribeListRoom = () => ({
	type: REQUEST_UNSUBSCRIBE_LIST_ROOM,
});

export const NEXT_STEP = 'NEXT_STEP';

export const nextStep = step => ({
	type: NEXT_STEP,
	payload: {},
});

export const PREV_STEP = 'PREV_STEP';

export const prevStep = step => ({
	type: PREV_STEP,
	payload: {},
});

export const CLOSE_REG_MODAL = 'CLOSE_REG_MODAL';
export const closeRegModal = () => ({
	type: CLOSE_REG_MODAL,
	payload: {},
});

export const CLOSE_ROOM_MODAL = 'CLOSE_ROOM_MODAL';
export const closeRoomModal = () => ({
	type: CLOSE_ROOM_MODAL,
	payload: {},
});

export const TOGGLE_SWITCH_ROOM_MODAL_ON = 'TOGGLE_SWITCH_ROOM_MODAL';
export const toggleSwitchRoomModalOn = () => ({
	type: TOGGLE_SWITCH_ROOM_MODAL_ON,
});

export const TOGGLE_SWITCH_ROOM_MODAL_OFF = 'TOGGLE_SWITCH_ROOM_MODAL_OFF';
export const toggleSwitchRoomModalOff = () => ({
	type: TOGGLE_SWITCH_ROOM_MODAL_OFF,
});
