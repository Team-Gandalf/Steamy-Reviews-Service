// const puppeteer = require('puppeteer');
const request = require('supertest');
const app = require('../server/index.js');

// test get request on server
describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/api/reviews')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});