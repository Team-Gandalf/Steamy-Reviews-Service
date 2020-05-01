const faker = require('faker');
const mongoose = require('mongoose');
const db = require('./index.js');

for (let i = 0; i < 100; i++) {
  let reviewCount = Math.floor(Math.random() * 50);

  let reviews = [];

  for (let j = 0; j < reviewCount; j++) {
    let newUser = {
      id: j,
      username: faker.internet.userName(),
      steam_purchaser: faker.random.boolean(),
      numProducts: faker.random.number(500),
      icon: faker.image.imageUrl()
    };

    reviews.push({
      id: j,
      description: faker.lorem.paragraph(),
      helpful: faker.random.number(1000),
      funny: faker.random.number(1000),
      date_posted: faker.date.past(),
      thread_length: faker.random.number(50),
      user: newUser
    });
  }

  let fakeGame = {
    id: i,
    name: faker.commerce.productName(),
    numReviews: faker.random.number(),
    reviews: reviews
  };

  db.save(fakeGame);

  console.log(i);

}
