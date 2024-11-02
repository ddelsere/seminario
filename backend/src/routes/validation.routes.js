const express = require('express');
const router = express.Router();
const validateCtrl = require('../controllers/validateController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Define a folder where files will be temporarily stored



router.post('/url', validateCtrl.validateUrl)
router.post('/image', upload.single('image'), validateCtrl.validateImage)


module.exports = router;