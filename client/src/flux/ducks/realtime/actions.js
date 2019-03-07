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

export const addInMessage = message => ({
	type: ADD_IN_MESSAGE,
	payload: {
		message,
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

export const LIST_ALL_ROOMS = 'LIST_ALL_ROOMS';

export const listRooms = rooms => ({
	type: LIST_ALL_ROOMS,
	payload: {
		rooms,
	},
});
