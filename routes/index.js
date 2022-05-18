var express = require('express');
var router = express.Router();
const food11 = [
  {
    id: Math.floor(Math.random() * 100),
    email: "test@example.com",
  },
];

const foods = [
  {
    name: "buns dau mam tom",
    price: 11,
    img:"https://d13jio720g7qcs.cloudfront.net/images/guides/origin/5f101bf45e83f.jpg",
    description: "buns an rat ngon",
    category:"Pizza"
  },

  {
    name: "buns dau mam tom",
    price: 122,
    img:"https://d13jio720g7qcs.cloudfront.net/images/guides/origin/5f101bf45e83f.jpg",
    description: "bun cha caccacacac",
    category:"Pizza"
  },

  {
    name: "Ca com",
    price: 321,
    img:"https://d13jio720g7qcs.cloudfront.net/images/guides/origin/5f101bf45e83f.jpg",
    description: "buns an rat ngon",
    category:"Pizza"
  },
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { foods});
  // res.send('respond with a resource INDEX');
});

module.exports = router;
