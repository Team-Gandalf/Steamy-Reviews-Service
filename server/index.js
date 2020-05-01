const express = require('express');

const app = express();

// MIDDLEWARE
const bodyParser = require('body-parser');
const db = require('../db/index.js');

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/api/reviews', (req, res) => {
  const { game } = req.body;
  db.find(game, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(results);
      res.status(200).send(results);
    }
  });
});


module.exports = app;
