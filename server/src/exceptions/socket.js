const mongoose = require('mongoose');
const EventsModel = mongoose.model('events');
const socketConstants = require('../constants/socket');

async function handleSocketException({ socket, err }) {
	try {
		const event = new EventsModel({
			kind: 'error',
			uid: socket.id,
			ppid: process.ppid,
		});

		await event.save();
	} catch (error) {
		throw new Error(error);
	} finally {
		throw err;
	}
}

module.exports = {
	handleSocketException,
};
