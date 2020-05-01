const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/steamy',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const userSchema = mongoose.Schema({
  id: { type: Number },
  username: { type: String },
  steam_purchaser: { type: Boolean },
  numProducts: { type: Number },
  icon: { type: String },
});

const reviewSchema = mongoose.Schema({
  id: { type: Number },
  game: { type: String },
  game_reviews: { type: Number },
  description: { type: String },
  helpful: { type: Number },
  date_posted: { type: Date },
  thread_length: { type: Number },
  user: { type: userSchema },
});

const Review = mongoose.model('Review', reviewSchema);


const save = (review) => {
  const entry = new Review({
    id: review.id,
    game: review.game,
    game_reviews: review.game_reviews,
    description: review.description,
    helpful: review.helpful,
    funny: review.funny,
    date_posted: review.date_posted,
    language: review.language,
    thread_length: review.thread_length,
    user: {
      id: review.user.id,
      username: review.user.username,
      steam_purchaser: review.user.steam_purchaser,
      numProducts: review.user.numProducts,
      icon: review.user.icon,
    },
  });

  entry.save((err, results) => {
    if (err) {
      console.error(err);
    }
    console.log('successfully saved!', results);
  });
};

const find = (inputGame, callback) => {
  Review.find({ game: inputGame }).exec((err, res) => {
    callback(err, res);
  });
};

module.exports.save = save;
module.exports.find = find;
module.exports.Review = Review;
