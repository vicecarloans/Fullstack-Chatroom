import { eventChannel } from 'redux-saga';
import { customSocketEvents } from 'constants/events';

// Create a buffer for incoming events

export const createSocketNotice = socket =>
	eventChannel(emit => {
		socket.on(customSocketEvents.NOTICE, ({ message }) => {
			emit({ message, author: 'BOT' });
		});
		return () => {
			socket.off(customSocketEvents.NOTICE, ({ message }) => {
				emit({ message, author: 'BOT' });
			});
		};
	});

export const createSocketReceiveMessage = socket =>
	eventChannel(emit => {
		socket.on(customSocketEvents.RECEIVE_MESSAGE, ({ message, author }) => {
			emit({ message, author });
		});
		return () => {
			socket.off(
				customSocketEvents.RECEIVE_MESSAGE,
				({ message, author }) => {
					emit({ message, author });
				}
			);
		};
	});

export const createSocketInMessage = socket =>
	eventChannel(emit => {
		socket.on(customSocketEvents.MESSAGE, ({ message }) => {
			emit({ message, username: socket.username, room: socket.room });
		});
		return () => {
			socket.off(customSocketEvents.MESSAGE, ({ message }) => {
				emit({ message, username: socket.username, room: socket.room });
			});
		};
	});

export const createSocketError = socket =>
	eventChannel(emit => {
		socket.on(customSocketEvents.CUSTOM_ERROR, ({ message }) => {
			emit(message);
		});
		return () => {
			socket.off(customSocketEvents.CUSTOM_ERROR, ({ message }) => {
				emit(message);
			});
		};
	});
