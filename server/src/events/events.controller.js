const mongoose = require('mongoose');
const EventsModel = mongoose.model('events');

async function list(req, res, next) {
	const { limit = 50, skip = 0 } = req.query;
	try {
		const events = await EventsModel.list({ limit, skip });
		res.json(events);
	} catch (err) {
		next(err);
	}
}

module.exports = { list };
