const faker = require('faker');

let reviewCount = Math.floor(Math.random() * 50);

let reviews = [];

for (let i = 0; i < reviewCount; i++) {
  let newUser = {
    username: faker.internet.userName(),
    steam_purchaser: faker.random.boolean(),
    numProducts: faker.random.number(500),
    icon: faker.image.imageUrl()
  };

  reviews.push({
    description: faker.lorem.paragraph(),
    helpful: faker.random.number(1000),
    funny: faker.random.number(1000),
    date_posted: faker.date.past(),
    thread_length: faker.random.number(50),
    user: newUser
  });
}

let fakeGame = {
  name: faker.commerce.productName(),
  numReviews: faker.random.number(),
  reviews: reviews
};

module.exports.fakeGame = fakeGame;
