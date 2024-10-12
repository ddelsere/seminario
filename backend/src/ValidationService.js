// this example uses axios
const axios = require('axios');

const validateUrl = async (url) => {
    axios.get('https://api.sightengine.com/1.0/check.json', {
        params: {
            'url': 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/A3DC/production/_127984914_mediaitem127984913.jpg.webp',
            'models': 'genai',
            'api_user': '604104224',
            'api_secret': 'JGqjDsyEDLb9xTof5t2AFqffZSNKrLs2',
        }
    })
        .then(function (response) {
            // on success: handle response
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            if (error.response) console.log(error.response.data);
            else console.log(error.message);
        });
    
};

    // axios.get('https://api.sightengine.com/1.0/check.json', {
    //     params: {
    //         'url': 'https://sightengine.com/assets/img/examples/example-prop-c1.jpg',
    //         'models': 'genai',
    //         'api_user': '{api_user}',
    //         'api_secret': '{api_secret}',
    //     }
    // })
    //     .then(function (response) {
    //         // on success: handle response
    //         console.log(response.data);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         if (error.response) console.log(error.response.data);
    //         else console.log(error.message);
    //     });

module.exports = {
    validateUrl
};