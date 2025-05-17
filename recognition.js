const axios = require("axios");

axios({
    method: "POST",
    url: "https://serverless.roboflow.com/cats-n9b87/3",
    params: {
        api_key: "3Hq1uERhmVMjIMbmB10u",
        image: "https://l4e1pa0te997vcur.public.blob.vercel-storage.com/IMG_3994-gusyTiqmEBLBewFvDSn5imR2Y3xo3g.JPG"
    }
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error.message);
});