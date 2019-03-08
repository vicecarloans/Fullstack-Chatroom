const mongoose = require('mongoose');
const EventsModel = mongoose.model('events');
const Promise = require('bluebird');

function getAllUserByRoom({ io, room }) {
	return new Promise((resolve, reject) => {
		io.in(room).clients((err, clients) => {
			if (err) reject(err);
			const clientNames = clients.map(client => client.username);
			resolve(clientNames);
		});
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
