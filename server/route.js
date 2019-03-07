const express = require('express');

const router = express.Router();

const eventsRoute = require('./src/events/events.route');

const historyRoute = require('./src/history/history.route');

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.json({ status: 'OK' }));

/* /api/events - all the events that happens to the server */
router.use('/events', eventsRoute);

/* /api/history - all the chat history */
router.use('/history', historyRoute);

module.exports = router;
