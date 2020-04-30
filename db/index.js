const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true});

let gameSchema = mongoose.Schema({
  id: Number,
  name: String,
  numReviews: Number,
  reviews: [
    {
      id: Number,
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
    }
  ]
})

let Game = mongoose.model('Game', gameSchema);


let save = game => {
  let entry = new Game({
    id: game.id,
    name: game.name,
    numReviews: game.numReviews,
    reviews: [
      {
        id: game.review.id,
        description: game.review.description,
        helpful: game.review.helpful,
        funny: game.review.funny,
        date_posted: game.review.date_posted,
        language: game.review.language,
        thread_length: game.review.thread_length,
        user: {
          id: game.review.user.id,
          username: game.review.user.username,
          steam_purchaser: game.review.user.steam_purchaser,
          numProducts: game.review.user.numProducts,
          icon: game.review.user.icon
        }
      }
    ]
  })

  entry.save( (err, results) => {
    if (err) {
      return console.error(err);
    }
  })
}

let find = callback => {
  Game.find({}).exec( (err, res) => {
    callback(err, res);
  })
}

module.exports.save = save;
module.exports.find = find;