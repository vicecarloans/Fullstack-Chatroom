const eventsIO = require('./src/events/events.socket');
const historyIO = require('./src/history/history.socket');
module.exports = async (io, socket) => {
	/* Listen to all io events */
	await eventsIO(io, socket);
	await historyIO({ io, socket });
};
