const validationService = require('../services/ValidationService');


exports.validateUrl = async (req, res) => {
    console.log('validar url')
    const { url } = req.body;
    // const score = await validationService.validateUrl(url);
    // res.json(score);
    res.status(200).json(59);
};




exports.validateImage = async (req, res) => {
    const { image } = req.body;
    const score = await validationService.validateImage(image);
    res.json(score);
};