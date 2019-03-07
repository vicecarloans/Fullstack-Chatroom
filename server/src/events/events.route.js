const express = require('express');
const eventController = require('./events.controller');

const router = express.Router();

router
	.route('/log')
	/* GET /api/events/log */
	.get(eventController.list);

module.exports = router;
