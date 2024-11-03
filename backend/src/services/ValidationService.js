// this example uses axios
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const validateUrl = async (url) => {
    const response = await axios.get('https://api.sightengine.com/1.0/check.json', {
        params: {
            'url': url,
            'models': 'genai',
            'api_user': '604104224',
            'api_secret': 'JGqjDsyEDLb9xTof5t2AFqffZSNKrLs2',
        }
    })
    const score = response.data.type.ai_generated * 100;
    console.log('Score:', score);
    return score;
};

const validateImage = async (image) => {
    data = new FormData();
    data.append('media', fs.createReadStream(image));
    data.append('models', 'genai');
    data.append('api_user', '604104224');
    data.append('api_secret', 'JGqjDsyEDLb9xTof5t2AFqffZSNKrLs2');


    const response = await axios({
        method: 'post',
        url: 'https://api.sightengine.com/1.0/check.json',
        data: data,
        headers: data.getHeaders(),
    });


    const score = response.data.type.ai_generated * 100;
    console.log('Score:', score);

    // Delete the image after the request is complete
    fs.unlink(image, (err) => {
        if (err) {
          console.error(`Error deleting file: ${err}`);
        } else {
          console.log(`Successfully deleted ${image}`);
        }
      });
    return score; 

}



module.exports = {
    validateUrl,
    validateImage
};