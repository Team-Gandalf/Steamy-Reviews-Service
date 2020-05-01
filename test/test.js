// const puppeteer = require('puppeteer');
const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/index.js');
const db = require('../db/index.js');

const request = supertest(app);

const databaseName = 'steamy';

// connect to db
beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

// test get request on server
describe('Test the root path', () => {
  test('It should response the GET method', async (done) => {
    let res = await request.get('/api/reviews');
    expect(res.statusCode).toBe(200);
    done();
  });

  // test get route to database with fake data
  test('Should find items in database', async (done) => {
    let res = await request.get('/api/reviews')
      .send({
        game: 'Practical Granite Car',
      });

    expect(res.body).toBeDefined();
    expect(res.statusCode).toBe(200);
    done();
  });
});
