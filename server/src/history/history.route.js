const express = require('express');

const router = express.Router();

const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const historyController = require('./history.controller');

router
	.route('/')
	/* GET /api/history  */
	.get(historyController.list);

router
	.route('/room')
	.post(
		validate(paramValidation.listHistoryByRoom),
		historyController.listByRoom
	);

module.exports = router;
