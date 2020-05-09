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
      player_type: faker.random.arrayElement(['Power Player', '3 Years of Service', 'Walking Tall', 'Amber']),
      xp: faker.random.number(1000),
      friend_level: faker.random.number(50),
      steam_level: faker.random.number(1000),
    };

    let newReview = {
      id: i,
      game: currentGame,
      game_reviews: reviewCount,
      hours: faker.finance.amount(0, 100, 1),
      description: faker.lorem.paragraphs(),
      helpful: faker.random.number(1000),
      funny: faker.random.number(1000),
      date_posted: faker.date.past(),
      thread_length: faker.random.number(50),
      user: newUser,
    };

    db.save(newReview);
  }
}
