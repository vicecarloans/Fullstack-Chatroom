import { eventChannel } from 'redux-saga';
import { customSocketEvents } from 'constants/events';

//Buffer for room event

export const createSocketRooms = socket =>
	eventChannel(emit => {
		socket.on(customSocketEvents.ROOMS, data => {
			emit(data);
		});
		return () => {
			socket.off(customSocketEvents.ROOMS, data => {
				emit(data);
			});
		};
	});
