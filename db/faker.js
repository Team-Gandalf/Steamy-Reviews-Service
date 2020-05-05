const faker = require('faker');
const db = require('./index.js');

for (let i = 0; i < 100; i += 1) {
  let currentGame = faker.commerce.productName();

  let reviewCount = Math.floor(Math.random() * 50);

  for (let j = 0; j < reviewCount; j += 1) {
    let newUser = {
      id: j,
      username: faker.internet.userName(),
      steam_purchaser: faker.random.boolean(),
      numProducts: faker.random.number(500),
      numReviews: faker.random.number(500),
      icon: faker.image.imageUrl(),
    };

    let newReview = {
      id: i,
      game: currentGame,
      game_reviews: reviewCount,
      hours: faker.random.number(100),
      description: faker.lorem.paragraph(),
      numhelpful: faker.random.number(1000),
      numfunny: faker.random.number(999),
      date_posted: faker.date.past(),
      thread_length: faker.random.number(50),
      user: newUser,
    };

    db.save(newReview);
  }
}
