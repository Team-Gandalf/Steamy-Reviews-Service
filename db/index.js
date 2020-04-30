const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true});

let reviewSchema = mongoose.Schema({
  id: Number,
  game_name: String,
  description: String,
  helpful: Number,
  funny: Number,
  date_posted: Date,
  language: String,
  thread_length: Number,
  user: {
    id: Number,
    username: String,
    steam_purchaser: Boolean,
    numProducts: Number,
    icon: String
  }
})

let Review = mongoose.model('Review', reviewSchema);


let save = review => {
  let entry = new Review({
    id: review.id,
    game_name: review.game_name,
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
      icon: review.user.icon
    }
  })

  entry.save( (err) => {
    if (err) {
      return console.error(err);
    }
  })
}

let find = callback => {
  Review.find({}).sort('-helpful').limit(10).exec( (err, res) => {
    callback(res);
  })
}

module.exports.save = save;
module.exports.find = find;