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
  // res.render('index', { foods});

    let { currentPage } = req.query;
    if (!currentPage || isNaN(currentPage)) currentPage = 1;
    else{
      currentPage = parseInt(currentPage);
    }

    const numberFoodPerPage=3;
    
    // const count =await foodService.getNumberOfFoods();
    const count=foods.length;
    // const foods  =await foodService.getFoodsByFoodPerPage(currentPage,numberFoodPerPage);
    const totalPages = Math.ceil(count / 2);//ITEMS_PER_PAGE=2
    const nextPage = currentPage + 1;
    const previousPage = currentPage - 1;
    const pages= Array.from(Array(totalPages).keys()).map(i => i + 1);

    res.render("index",{foods,currentPage,pages,nextPage,previousPage})   
  
});

module.exports = router;
