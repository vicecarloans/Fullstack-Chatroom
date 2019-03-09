const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageHistorySchema = new Schema({
	sender: {
		type: String,
		default: 'Anonymous',
	},
	receivers: {
		type: [String],
	},
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

MessageHistorySchema.statics = {
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
	listByRoom({ rooms, skip = 0, limit = 50 } = {}) {
		return this.find({ room: { $in: rooms } })
			.sort({ createdAt: -1 })
			.skip(+skip)
			.limit(+limit);
	},
};

mongoose.model('message-history', MessageHistorySchema);
