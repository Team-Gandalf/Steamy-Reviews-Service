const db = require('../db/index.js');
const express = require('express');
let app = express();

// MIDDLEWARE
const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

// ROUTES
app.get('/api/reviews', (req, res) => {
  console.log("hello");
  db.find( (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
});


// PORT
let port = 4200;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})