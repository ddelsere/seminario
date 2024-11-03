const validationService = require('../services/ValidationService');


exports.validateUrl = async (req, res) => {
    console.log('validar url')
    const url = req.body.url;
    console.log(url)
    const score = await validationService.validateUrl(url);
    // res.json(score);
    res.json(score);
};




exports.validateImage = async (req, res) => {
    console.log('validar imagen')
    try {
        const image = req.file;

        // You can pass the file path to your validation service

        const score = await validationService.validateImage(image.path);
        console.log(score)
        // Respond with the validation result
        res.json(score);
    } catch (error) {
        console.error('Error in image validation:', error);
        res.status(500).json({ error: 'Failed to validate image' });
    }
};