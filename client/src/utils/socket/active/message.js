import { customSocketEvents } from 'constants/events';

export const addMessageSocket = ({ socket, message }) => {
	socket.emit(customSocketEvents.ADD_MESSAGE, { message });
};

export const changeUserNameSocket = ({ socket, username }) => {
	socket.emit(customSocketEvents.CHANGE_USERNAME, { username });
};
