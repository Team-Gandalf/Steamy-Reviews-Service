const faker = require('faker');
const db = require('./index.js');

for (let i = 0; i < 100; i += 1) {
  const currentGame = faker.commerce.productName();

  const reviewCount = Math.floor(Math.random() * 50);

  for (let j = 0; j < reviewCount; j += 1) {
    const newUser = {
      id: j,
      username: faker.internet.userName(),
      steam_purchaser: faker.random.boolean(),
      numProducts: faker.random.number(500),
      icon: faker.image.imageUrl(),
    };

    const newReview = {
      id: j,
      game: currentGame,
      game_reviews: reviewCount,
      description: faker.lorem.paragraph(),
      helpful: faker.random.number(1000),
      funny: faker.random.number(1000),
      date_posted: faker.date.past(),
      thread_length: faker.random.number(50),
      user: newUser,
    };

    db.save(newReview);
  }
}
