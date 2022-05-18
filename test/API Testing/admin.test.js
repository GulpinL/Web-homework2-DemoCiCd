const request = require("supertest");

const app = require("../../app");

describe('register', () => {
    it('returns bad request if first name is missing', async () => {
      const res = await request(app).post('/admin').send({ firstName: 'Jan' });
  
      expect(res.statusCode).toEqual(201);
    });
  
    it('returns bad request if first name is missing', async () => {
      const res = await request(app)
        .post('/admin')
        .send({ somethingElse: 'Jan' });
  
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual('adminPage');
    });
  });