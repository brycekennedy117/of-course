const express = require('express');

const pageController = require('../controllers/pages.js')
const router = express.Router();

router.get('/', pageController.index)

module.exports = router;