const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true});

let reviewsSchema = mongoose.Schema({
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

let Review = mongoose.model('Review', reviewsSchema);


let save = review => {
  let entry = new Review({

  })
}

let find = callback => {
  Review.find({}).sort().limit(10).exec( (err, res) => {
    callback(res)
  })
}

module.exports.save = save;
module.exports.find = find;