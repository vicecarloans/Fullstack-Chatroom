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

			const { room, username, id } = socket;

			//save event to room first
			const clients = await userUtils.getAllUserByRoom({ io, room });
			// Exclude sender in the array

			const clientUsernames = clients.map(id => {
				return io.sockets.connected[id].username;
			});

			const receiverUsernames = clientUsernames.filter(client => {
				return client != username;
			});

			// Message History
			const MessageHistoryInstance = new MessageHistoryModel({
				sender: username,
				receivers: receiverUsernames,
				content: message,
				room,
			});

			await MessageHistoryInstance.save();

			// Events
			await userUtils.saveEvent({
				kind: socketConstants.ADD_MESSAGE,
				socket,
				room,
			});
			// Broadcast to the receivers
			io.in(room).emit(socketConstants.RECEIVE_MESSAGE, {
				message,
				author: socket.username,
			});
		} catch (err) {
			await userExceptions.handleSocketException({ socket, err });
		}
	});
}

module.exports = async ({ io, socket }) => {
	chatListener({ io, socket });
};
