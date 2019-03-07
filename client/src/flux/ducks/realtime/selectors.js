import { createSelector } from 'reselect';

export const realTimeSelector = state => state.realtime;

export const serverStatus = createSelector(
	realTimeSelector,
	realtime => realtime.status.server
);

export const channelStatus = createSelector(
	realTimeSelector,
	realtime => realtime.status.channel
);
