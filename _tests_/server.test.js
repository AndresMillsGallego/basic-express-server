'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing the server methods', () => {

  test('API should return a 200 status if the method is good', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });

  test('API should return a 404 if the method is bad', async () => {
    const response = await  request.post('/');
    expect(response.status).toEqual(404);
  });
});
