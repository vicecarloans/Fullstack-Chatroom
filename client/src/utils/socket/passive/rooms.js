import { eventChannel } from 'redux-saga';
import { customSocketEvents } from 'constants/events';
import { filterRooms } from 'utils/filterRooms';
//Buffer for room event

export const createSocketRooms = socket =>
	eventChannel(emit => {
		socket.on(customSocketEvents.ROOMS, ({ rooms }) => {
			const filteredRooms = filterRooms({ rooms });
			emit({ rooms: filteredRooms });
		});
		return () => {
			socket.off(customSocketEvents.ROOMS, ({ rooms }) => {
				const filteredRooms = filterRooms({ rooms });
				emit({ rooms: filteredRooms });
			});
		};
	});
