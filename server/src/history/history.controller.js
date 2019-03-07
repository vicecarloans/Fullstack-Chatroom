const mongoose = require('mongoose');

const MessageModel = mongoose.model('message-history');

/*
 * Get a list of all message history
 */
async function list(req, res, next) {
	const { skip = 0, limit = 50 } = req.query;
	try {
		const messages = await MessageModel.list({ skip, limit });
		res.json(messages);
	} catch (err) {
		next(err);
	}
}

/*
 * Get a list of all messages history by room
 */

async function listByRoom(req, res, next) {
	const { room } = req.body;
	const { skip = 0, limit = 50 } = req.query;
	try {
		const messages = await MessageModel.listByRoom({ room, skip, limit });
		res.json(messages);
	} catch (err) {
		next(err);
	}
}

module.exports = { list, listByRoom };
