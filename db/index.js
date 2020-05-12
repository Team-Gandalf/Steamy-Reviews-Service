const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/steamyReviews',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
);

const userSchema = mongoose.Schema({
  id: { type: Number },
  username: { type: String },
  recommended: { type: Boolean },
  numProducts: { type: Number },
  numReviews: { type: Number },
  icon: { type: String },
  player_type: { type: String },
  xp: { type: Number },
  friend_level: { type: Number },
  steam_level: { type: Number },
});

const reviewSchema = mongoose.Schema({
  id: { type: Number },
  game: { type: String },
  game_reviews: { type: Number },
  rating: { type: Number },
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
  const entry = new Review({
    id: review.id,
    game: review.game,
    game_reviews: review.game_reviews,
    rating: review.rating,
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
      recommended: review.user.recommended,
      numProducts: review.user.numProducts,
      numReviews: review.user.numReviews,
      icon: review.user.icon,
      player_type: review.user.player_type,
      xp: review.user.xp,
      friend_level: review.user.friend_level,
      steam_level: review.user.steam_level,
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

const update = (gameId, reviewId, field, value, callback) => {
  if (field === 'helpful') {
    Review.findOneAndUpdate({ id: gameId, 'user.id': reviewId }, { helpful: value }, (err, res) => {
      callback(err, res);
    });
  } else {
    Review.findOneAndUpdate({ id: gameId, 'user.id': reviewId }, { funny: value }, (err, res) => {
      callback(err, res);
    });
  }
};

module.exports.update = update;
module.exports.save = save;
module.exports.find = find;
module.exports.Review = Review;
