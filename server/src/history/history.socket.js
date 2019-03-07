const socketConstants = require('../constants/socket');
const userUtils = require('../helpers/users');
const userExceptions = require('../exceptions/socket');
const mongoose = require('mongoose');
const MessageHistoryModel = mongoose.model('message-history');
const EventsModel = mongoose.model('events');

function chatListener({ io, socket }) {
	socket.on(socketConstants.ADD_MESSAGE, async data => {
		try {
			const { message } = data;

			const { room, username } = socket;

			//save event to room first
			const clients = await userUtils.getAllUserByRoom({ io, room });
			// Exclude sender in the array
			const receivers = clients.filter(
				client => client.username != username
			);

			// Message History
			const MessageHistoryInstance = new MessageHistoryModel({
				sender: username,
				receivers,
				content: message,
				room,
			});

			await MessageHistoryInstance.save();

			// Events
			const EventsInstance = new EventsModel({
				kind: socketConstants.ADD_MESSAGE,
				uid: socket.id,
				ppid: process.ppid,
				room,
			});

			await EventsInstance.save();
			// Broadcast to the receivers
			io.to(room).emit(socketConstants.RECEIVE_MESSAGE, { message });
		} catch (err) {
			await userExceptions.handleSocketException({ socket, err });
		}
	});
}

module.exports = async ({ io, socket }) => {
	chatListener({ io, socket });
};
