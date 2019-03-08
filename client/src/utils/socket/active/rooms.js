import { customSocketEvents } from 'constants/events';

export const joinRoomSocket = ({ socket, room }) => {
	socket.emit(customSocketEvents.JOIN, { room });
};

export const leaveRoomSocket = ({ socket }) => {
	socket.emit(customSocketEvents.LEAVE);
};

export const switchRoomSocket = ({ socket, room }) => {
	socket.emit(customSocketEvents.SWITCH_ROOM, { newRoom: room });
};

export const unsubscribeListRoomSocket = ({ socket }) => {
	socket.off(customSocketEvents.ROOMS);
};
