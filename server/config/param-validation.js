const Joi = require('joi');
const Regex = require('./regex');

module.exports = {
	// POST /api/history/room
	listHistoryByRoom: {
		body: {
			rooms: Joi.array().required(),
		},
	},
};
