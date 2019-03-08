import { createSelector } from 'reselect';

export const realTimeSelector = state => state.realtime;

export const serverStatusSelector = createSelector(
	realTimeSelector,
	realtime => realtime.status.server
);

export const channelStatusSelector = createSelector(
	realTimeSelector,
	realtime => realtime.status.channel
);

export const messageLogSelector = createSelector(
	realTimeSelector,
	realtime => realtime.messages.logs
);

export const usernameExistSelector = createSelector(
	realTimeSelector,
	realtime => !!realtime.messages.username
);

export const roomExistSelector = createSelector(
	realTimeSelector,
	realtime => !!realtime.messages.room
);

export const usernameSelector = createSelector(
	realTimeSelector,
	realtime => realtime.messages.username
);

export const roomSelector = createSelector(
	realTimeSelector,
	realtime => realtime.messages.room
);

export const inMessExistSelector = createSelector(
	realTimeSelector,
	realtime =>
		!!realtime.messages.inMess.message && !!realtime.messages.inMess.type
);

export const inMessSelector = createSelector(
	realTimeSelector,
	realtime => realtime.messages.inMess
);

export const roomsSelector = createSelector(
	realTimeSelector,
	realtime => realtime.rooms.list
);

export const stepSelector = createSelector(
	realTimeSelector, 
	realtime => realtime.step
)