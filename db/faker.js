const faker = require('faker');
const db = require('./index.js');

for (let i = 0; i < 100; i += 1) {
  const currentGame = faker.commerce.productName();
  const playerTypes = ['Power Player', '3 Years of Service', 'Walking Tall', 'Amber'];

  const reviewCount = Math.floor(Math.random() * 50);

  for (let j = 0; j < reviewCount; j += 1) {
    const newUser = {
      id: j,
      username: faker.internet.userName(),
      recommended: faker.random.boolean(),
      numProducts: faker.random.number(500),
      numReviews: faker.random.number(500),
      icon: faker.image.imageUrl(),
      player_type: faker.random.arrayElement(playerTypes),
      xp: faker.random.number(1000),
      friend_level: faker.random.number(50),
      steam_level: faker.random.number(1000),
    };

    const newReview = {
      id: i,
      game: currentGame,
      game_reviews: reviewCount,
      rating: faker.random.number(reviewCount),
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
