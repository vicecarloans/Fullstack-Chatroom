const express = require('express');

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.json({ status: 'OK' }));

module.exports = router;
