const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageHistorySchema = new Schema({
	sender: {
		type: String,
		default: 'Anonymous',
	},
	receiver: [
		{
			name: String,
		},
	],
	content: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now(),
	},
	room: {
		type: String,
	},
});

HistorySchema.statics = {
	/*
	 * Get all messages
	 */
	list({ skip = 0, limit = 50 } = {}) {
		return this.find()
			.sort({ createdAt: -1 })
			.skip(+skip)
			.limit(+limit);
	},
	/*
	 * Get all messages by rooms
	 */
	listByRoom({ room, skip = 0, limit = 50 } = {}) {
		return this.find({ room })
			.sort({ createdAt: -1 })
			.skip(+skip)
			.limit(+limit);
	},
};

mongoose.model('message-history', MessageHistorySchema);
