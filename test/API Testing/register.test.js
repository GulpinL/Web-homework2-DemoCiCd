const request = require("supertest");

const app = require("../../app");

describe('register', () => {
    it('returns bad request if first name is missing', async () => {
      const res = await request(app).post('/registerdemoci').send({ firstName: 'Jan' });
  
      expect(res.statusCode).toEqual(201);
    });
  
    it('returns bad request if first name is missing', async () => {
      const res = await request(app)
        .post('/registerdemoci')
        .send({ somethingElse: 'Jan' });
  
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual('you need to pass a firstName');
    });
  });