const axios = require("axios");
const dotenv = require("dotenv")

require('dotenv').config();

axios({
    method: "POST",
    url: "https://serverless.roboflow.com/cats-1dq9b/5",
    params: {
        api_key: process.env.CAT_RECOGNITON_KEY,
        image: "https://l4e1pa0te997vcur.public.blob.vercel-storage.com/IMG_1088-RcfcDKjg7yVN4GzPkFxzfgK6I5Ckwk.jpeg"
    }
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error);
});