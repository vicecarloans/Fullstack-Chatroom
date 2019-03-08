export const filterRooms = ({ rooms }) => {
	return Object.keys(rooms).filter(id => {
		return !rooms[id].sockets[id];
	});
};
