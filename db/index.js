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
  numReviews: { type: Number },
  icon: { type: String },
});

const reviewSchema = mongoose.Schema({
  id: { type: Number },
  game: { type: String },
  game_reviews: { type: Number },
  hours: { type: Number },
  description: { type: String },
  helpful: { type: Number },
  funny: { type: Number },
  date_posted: { type: Date },
  thread_length: { type: Number },
  user: { type: userSchema },
});

const Review = mongoose.model('Review', reviewSchema);


const save = (review) => {
  let entry = new Review({
    id: review.id,
    game: review.game,
    game_reviews: review.game_reviews,
    hours: review.hours,
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
      numReviews: review.user.numReviews,
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
  Review.find({ id: inputGame }).sort({ helpful: -1 }).exec((err, res) => {
    callback(err, res);
  });
};

module.exports.save = save;
module.exports.find = find;
module.exports.Review = Review;
