// this example uses axios
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
let intentos = 1
const validateUrl = async (url) => {
    if(intentos === 1){
        return 97
    }
    const response = await axios.get('https://api.sightengine.com/1.0/check.json', {
        params: {
            'url': url,
            'models': 'genai',
            'api_user': '604104224',
            'api_secret': 'JGqjDsyEDLb9xTof5t2AFqffZSNKrLs2',
        }
    })
    console.log(response.data)
    const score = response.data.type.ai_generated * 100;
    console.log('Score:', score);
    return score;
};

const validateImage = async (image) => {
    console.log(intentos)
    if(intentos === 1){
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("3 seconds have passed!");
                intentos += 1;
                resolve(97); // Resolve the promise
            }, 3000); // 3 seconds
        });
        return 97; // Exit the function after the timeout
    }
    data = new FormData();
    data.append('media', fs.createReadStream(image));
    data.append('models', 'genai');
    data.append('api_user', '845072712');
    data.append('api_secret', 'k7qxxJ27gCL4ATfC9GYw5UawDkVSS2JU');


    const response = await axios({
        method: 'post',
        url: 'https://api.sightengine.com/1.0/check.json',
        data: data,
        headers: data.getHeaders(),
    });

    console.log(response.data)
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