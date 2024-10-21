const express = require('express');
const router = express.Router();
const validateCtrl = require('../controllers/validateController');




router.post('/url', validateCtrl.validateUrl)
router.post('/image', validateCtrl.validateImage)


module.exports = router;