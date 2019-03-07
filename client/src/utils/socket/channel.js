/* This part of socket deals with channel communication on/off/disconnect */

import io from 'socket.io-client';
import { SERVER_HOST } from 'constants/api';

export const connect = () => {
	const socket = io(SERVER_HOST);
	return new Promise(resolve => {
		socket.on('connect', () => {
			resolve(socket);
		});
	});
};

export const disconnect = () => {
	const socket = io(SERVER_HOST);
	return new Promise(resolve => {
		socket.on('disconnect', () => {
			resolve(socket);
		});
	});
};

export const reconnect = () => {
	const socket = io(SERVER_HOST);
	return new Promise(resolve => {
		socket.on('reconnect', () => {
			resolve(socket);
		});
	});
};
