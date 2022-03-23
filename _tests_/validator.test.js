'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing the validateName function', () => {

  test('API should return a 200 status if there is a name value', async () => {
    const response = await request.get('/person?name=Andres');
    expect (response.body).toEqual({name: 'Andres'});
  });

  test('API should return a 500 status if there is no name value', async () => {
    const response = await request.get('/person');
    expect (response.status).toEqual(500);
  });

});