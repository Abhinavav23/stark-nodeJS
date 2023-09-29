const express = require('express');
const { createUser, loginUser, getProfile } = require('../controller/userController');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/profile', getProfile)

module.exports = router