const mongoose = require('mongoose');
const EventsModel = mongoose.model('events');
const Promise = require('bluebird');

function getAllUserByRoom({ io, room }) {
	const allSocks = io.sockets.adapter.rooms[room].sockets;
	return Object.keys(allSocks).filter(sock => {
		return allSocks[sock];
	});
}

async function saveEvent({ kind, socket, room }) {
	try {
		const event = new EventsModel({
			kind,
			uid: socket.id,
			ppid: process.ppid,
			room,
		});
		await event.save();
	} catch (err) {
		throw err;
	}
}

module.exports = {
	getAllUserByRoom,
	saveEvent,
};
