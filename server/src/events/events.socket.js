const socketConstants = require('../constants/socket');
const socketExceptions = require('../exceptions/socket');
const userUtils = require('../helpers/users');

/* Writes into database on connection event */
async function connection({ socket }) {
	try {
		await userUtils.saveEvent({ kind: 'connection', socket });
	} catch (err) {
		await socketExceptions.handleSocketException({ socket, err });
	}
}

function disconnect({ io, socket }) {
	socket.on(socketConstants.DISCONNECT, async () => {
		try {
			await userUtils.saveEvent({
				kind: socketConstants.DISCONNECT,
				socket,
				room: socket.room,
			});
			socket.broadcast.to(socket.room).emit(socketConstants.NOTICE, {
				message: `${socket.username} is disconnected`,
			});
		} catch (err) {
			await socketExceptions.handleSocketException({ socket, err });
		}
	});
}

function changeUsername({ io, socket }) {
	socket.on(socketConstants.CHANGE_USERNAME, async data => {
		try {
			const { username } = data;
			if (!username) {
				throw new Error('You need to specify your username');
			}
			await userUtils.saveEvent({
				kind: socketConstants.CHANGE_USERNAME,
				socket,
			});
			socket.username = username;
			// This is an in-mail to user from the bot
			socket.send({
				message: `Your user name has been changed to ${username}`,
				username,
				room: socket.room,
			});
		} catch (err) {
			await socketExceptions.handleSocketException({ socket, err });
		}
	});
}

function joinRoom({ io, socket }) {
	socket.on(socketConstants.JOIN, async data => {
		const { room } = data;
		try {
			if (!room) {
				throw new Error('You need to specify a room');
			}

			// Join room
			socket.join(room);
			socket.room = room;
			// Save event model

			await userUtils.saveEvent({
				kind: socketConstants.JOIN,
				socket,
				room,
			});

			// This will be an in mail for user
			socket.send({
				message: 'You have joined the room',
				username: socket.username,
				room,
			});

			// Broadcast to everyone in the room a user has joined
			socket.broadcast.to(room).emit(socketConstants.NOTICE, {
				message: `${socket.username} has join the room`,
				room,
				username: socket.username,
			});
		} catch (err) {
			await socketExceptions.handleSocketException({ socket, err });
		}
	});
}

function leaveRoom({ io, socket }) {
	socket.on(socketConstants.LEAVE, async () => {
		const { room, username } = socket;
		try {
			if (!room) {
				throw new Error('User has not joined any room');
			}

			socket.leave(room);
			socket.room = null;

			socket.broadcast.to(room).emit(socketConstants.NOTICE, {
				message: `${username} has left the room`,
			});

			// Save event to event model
			await userUtils.saveEvent({
				kind: socketConstants.LEAVE,
				socket,
				room,
			});
		} catch (err) {
			await socketExceptions.handleSocketException({ socket, err });
		}
	});
}

function switchRoom({ io, socket }) {
	socket.on(socketConstants.SWITCH_ROOM, async ({ newRoom }) => {
		try {
			if (!newRoom) {
				throw new Error('No new room to switch');
			}
			const oldRoom = socket.room;
			const { username } = socket;
			//Leave old room
			socket.leave(oldRoom);
			socket.broadcast.to(oldRoom).emit(socketConstants.NOTICE, {
				message: `${username} has left the room`,
			});

			await userUtils.saveEvent({
				kind: socketConstants.LEAVE,
				socket,
				oldRoom,
			});

			//Join new room
			socket.join(newRoom);
			socket.room = newRoom;
			socket.send({
				message: `You have joined ${newRoom}`,
				room: socket.room,
				username: socket.username,
			});
			socket.broadcast.to(newRoom).emit(socketConstants.NOTICE, {
				message: `${username} has join the room`,
			});
			await userUtils.saveEvent({
				kind: socketConstants.JOIN,
				socket,
				newRoom,
			});
		} catch (err) {
			await socketExceptions.handleSocketException({ socket, err });
		}
	});
}

module.exports = async (io, socket) => {
	await connection({ io, socket });
	disconnect({ io, socket });
	joinRoom({ io, socket });
	changeUsername({ io, socket });
	leaveRoom({ io, socket });
	switchRoom({ io, socket });
	setInterval(() => {
		socket.broadcast.emit(socketConstants.ROOMS, {
			rooms: io.sockets.adapter.rooms,
		});
	}, 2000);
};
