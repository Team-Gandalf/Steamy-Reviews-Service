const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/steamy',
  { useNewUrlParser: true, useUnifiedTopology: true}
);

let userSchema = mongoose.Schema({
  id: { type: Number},
  username: { type: String },
  steam_purchaser: { type: Boolean},
  numProducts: { type: Number },
  icon: { type: String}
})

let reviewsSchema = mongoose.Schema({
  id: { type: Number},
  description: { type: String },
  helpful: { type: Number },
  date_posted: { type: Date },
  thread_length: { type: Number},
  user: { type: userSchema }
})

let gameSchema = mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  numReviews: { type: Number },
  reviews: { type: [reviewsSchema] }
})

let Game = mongoose.model('Game', gameSchema);


let save = game => {
  let entry = new Game({
    id: game.id,
    name: game.name,
    numReviews: game.numReviews,
    reviews: [
      {
        id: game.reviews.id,
        description: game.reviews.description,
        helpful: game.reviews.helpful,
        funny: game.reviews.funny,
        date_posted: game.reviews.date_posted,
        language: game.reviews.language,
        thread_length: game.reviews.thread_length,
        user: game.reviews.user
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
module.exports.Game = Game;