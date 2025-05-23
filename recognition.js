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
        image: "https://l4e1pa0te997vcur.public.blob.vercel-storage.com/stock3-pemvqFXTgJscWCAAhXyU3jquNSj8sf.jpg"
    }
})
.then(function(response) {
    console.log(response.data);
    if(response.data.predictions.length === 0) isCat = true;
    else {
        for(const item of response.data.predictions){
            if((item.class === 'cat' || item.class === 'pepe') && item.confidence > 0.5){
                isCat = true;
                console.log('this is a cat');
                break;
            }
        }
    }
    if(isCat){
        console.log(`send ${response.data.predictions}to database`)
    }
    else{
        console.log('not sending this')
    }
})
.catch(function(error) {
    console.log(error);
});