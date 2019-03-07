// This constant is used for socket events
module.exports = {
	DISCONNECT: 'disconnect',
	// This event is sent to group chat but not the user as a notice
	NOTICE: 'notice',

	// Join room
	JOIN: 'join',
	// Leave Room
	LEAVE: 'leave',
	// This event is sent to user if there's an error occur
	ERROR: 'error',
	// This event is used to send message to group chat
	ADD_MESSAGE: 'add_message',
	// This event is received message from chat
	RECEIVE_MESSAGE: 'receive_message',
	// This event is used to change username
	CHANGE_USERNAME: 'change_username',
	// This event will be emit with a list of the rooms
	ROOMS: 'rooms',
	// This event is to switch room when user already in the room
	SWITCH_ROOM: 'switch_room',
};
