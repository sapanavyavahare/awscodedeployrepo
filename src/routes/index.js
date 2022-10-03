const express = require('express');
const API_CONSTANT = require('../constants/api');

const router = express.Router();

router.use(API_CONSTANT.USERS, require('./routeIndex'));

module.exports = router;
