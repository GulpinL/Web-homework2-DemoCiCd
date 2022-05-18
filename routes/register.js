const express = require('express');

const router = express.Router();
router.post('/', (req, res, next) => {
  if (!req.body.firstName) {
    res.status(400).json('you need to pass a firstName');
    return;
  }
//   res.sendStatus(202);// chinh ow day der dduojc FAIL
  res.sendStatus(201);
});

router.get('/', (req, res, next) => {
    
    res.send("201");
  });
module.exports = router;