import { eventChannel } from 'redux-saga';
import { customSocketEvents } from '.';

// Create a buffer for incoming events

export const createSocketNotice = socket =>
	eventChannel(emit => {
		socket.on(customSocketEvents.NOTICE, ({ message }) => {
			emit(message);
		});
		return () => {
			socket.off(customSocketEvents.NOTICE, ({ message }) => {
				emit(message);
			});
		};
	});

export const createSocketMessage = socket =>
	eventChannel(emit => {
		socket.on('message', ({ message }) => {
			emit(message);
		});
		return () => {
			socket.off('message', ({ message }) => {
				emit(message);
			});
		};
	});

export const createSocketError = socket =>
	eventChannel(emit => {
		socket.on(customSocketEvents.ERROR, ({ message }) => {
			emit(message);
		});
		return () => {
			socket.off(customSocketEvents.ERROR, ({ message }) => {
				emit(message);
			});
		};
	});
