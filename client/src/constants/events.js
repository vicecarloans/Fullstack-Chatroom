export const customSocketEvents = {
	// This event is sent to group chat but not the user as a notice
	NOTICE: 'notice', //done
	// Join room
	JOIN: 'join', //done
	// Leave Room
	LEAVE: 'leave', //done
	// This event is sent to user if there's an error occur
	CUSTOM_ERROR: 'custom_error',
	// This event is used to send message to group chat
	ADD_MESSAGE: 'add_message', //done
	// This event is received message from chat
	RECEIVE_MESSAGE: 'receive_message', //done
	// This event is used to change username
	CHANGE_USERNAME: 'change_username', //done

	// This event will be listened with a list of the rooms
	ROOMS: 'rooms', //done
	// This event is to dispatch to switch room when user already in the room
	SWITCH_ROOM: 'switch_room', // done
	// In-mail message from admin
	MESSAGE: 'message', //done
};
