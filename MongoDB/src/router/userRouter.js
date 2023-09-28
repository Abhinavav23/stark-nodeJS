const express = require('express');
const { createUser } = require('../controller/userController');

const router = express.Router();

router.post('/signup', createUser);

module.exports = router