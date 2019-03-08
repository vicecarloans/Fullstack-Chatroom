const mongoose = require('mongoose');
require('./src/events/events.model');
require('./src/history/history.model');
const socketEvents = require('./src/constants/socket');

// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');

// make bluebird default Promise
Promise = require('bluebird');

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${mongoUri}`);
});

if (!module.parent) {
	// listen on port config.port
	const server = app.listen(config.port, () => {
		console.info(`server started on port ${config.port} (${config.env})`);
	});
	const socket = require('./socket');
	const io = require('socket.io')(server);
	io.on('connection', async _socket => {
		try {
			await socket(io, _socket);
		} catch (err) {
			_socket.emit(socketEvents.CUSTOM_ERROR, { err });
		}
	});
}

module.exports = app;
