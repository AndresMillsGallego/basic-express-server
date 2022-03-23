'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing the handleLog function', () => {

  test('API should return a 200 status if the route is good', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });

  test('API should return a 404 status if the route is bad', async () => {
    const response = await request.get('/invalidRoute');
    expect(response.status).toEqual(404);
  });
});