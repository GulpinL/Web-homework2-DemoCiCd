var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource long dep trai');
  // res.sendStatus(400);
});

module.exports = router;
