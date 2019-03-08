const httpStatus = require('http-status');
const mongoose = require('mongoose');
const APIError = require('../exceptions/APIError');
const { Schema } = mongoose;

/* 
    Event Schema
*/

const EventSchema = new Schema({
	kind: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now(),
	},
	uid: {
		type: String,
		required: true,
	},
	ppid: {
		type: Number,
		required: true,
	},
	room: {
		type: String,
	},
});

EventSchema.statics = {
	/*
	 * List events in descending order of 'CreatedAt' timestamp
	 * @param {number} skip - Number of events to be skipped
	 * @param {number} limit - Limit number of users to be returned
	 * @return {Promise<Event[]>}
	 */
	list({ skip = 0, limit = 50 } = {}) {
		return this.find()
			.sort({ createdAt: -1 })
			.skip(+skip)
			.limit(+limit);
	},
};

mongoose.model('events', EventSchema);
