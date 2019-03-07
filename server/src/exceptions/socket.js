const mongoose = require('mongoose');
const EventsModel = mongoose.model('events');
const socketConstants = require('../constants/socket');

async function handleSocketException({ socket, err }) {
	const event = new EventsModel({
		kind: socketConstants.ERROR,
		uid: socket.id,
		ppid: process.ppid,
		description: err.message,
	});
	await event.save();
	socket.emit(socketConstants.ERROR, { message: err.message });
}

module.exports = {
	handleSocketException,
};
