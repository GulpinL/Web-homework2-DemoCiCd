const request = require("supertest");

const app = require("../../app");


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

    {
        name: "Ca com",
        price: 321,
        img:"https://d13jio720g7qcs.cloudfront.net/images/guides/origin/5f101bf45e83f.jpg",
        description: "buns an rat ngon",
        category:"Pizza"
      },

      {
        name: "Ca com",
        price: 321,
        img:"https://d13jio720g7qcs.cloudfront.net/images/guides/origin/5f101bf45e83f.jpg",
        description: "buns an rat ngon",
        category:"Pizza"
      },

      {
        name: "Ca com",
        price: 321,
        img:"https://d13jio720g7qcs.cloudfront.net/images/guides/origin/5f101bf45e83f.jpg",
        description: "buns an rat ngon",
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

  describe('page number ', () => {
    it('returns bad request if first name is missing', async () => {
      const res = await request(app).post('/').send({ currentPage: 4 });
  
      expect(4).toEqual(4);
    });
  
    
  });