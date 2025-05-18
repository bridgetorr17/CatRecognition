const axios = require("axios");
const dotenv = require("dotenv")

require('dotenv').config();

let isCat = false;
let isDog = false;

axios({
    method: "POST",
    url: "https://serverless.roboflow.com/cats-1dq9b/4",
    params: {
        api_key: process.env.CAT_RECOGNITON_KEY,
        image: "https://l4e1pa0te997vcur.public.blob.vercel-storage.com/IMG_2707-ZRaO2hnMt6dFqt00Zcr1toRsPFHmib.webp"
    }
})
.then(function(response) {
    console.log(response.data.predictions);
    if(response.data.predictions.length === 0) isCat = true;
    else {
        response.data.predictions.forEach(item => {
            //if the model might have detected a cat, 
            //and it is even a little sure
            if((item.class === 'cat' || item.class === 'pepe') && item.confidence > 0.50){  
                isCat = true;
                console.log('lets say this is a cat');
            }
            
            //if the model detected something that it is 
            //very confident is NOT a cat, and there is 
            //nothing that even looks like a cat
            else if (item.class === 'not_cat' && item.confidence > 0.8){
                isNotCat = true;
                console.log('whatever picked up here is def not a cat')
            }
        });
    }
    
})
.catch(function(error) {
    console.log(error);
});