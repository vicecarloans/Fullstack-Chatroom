const Joi = require('joi');
const Regex = require('./regex');

module.exports = {
	// POST /api/history/room
	listHistoryByRoom: {
		body: {
			room: Joi.number().required(),
		},
	},
};
