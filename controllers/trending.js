var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/:apiType/:apiLang/:apiSince', (req, res, next) => {
console.log(req.params.apiType);
console.log(req.params.apiLang);
console.log(req.params.apiSince)

  axios.get(`https://ghapi.huchen.dev/${req.params.apiType}${req.params.apiLang}${req.params.apiSince}`)
    .then(function (response) {
      res.json(response.data);
    }).catch(function (err) {
      console.log(err)
    })

});

module.exports = router;