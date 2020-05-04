const express = require('express');

const app = express();

// MIDDLEWARE
const bodyParser = require('body-parser');
const db = require('../db/index.js');

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/api/reviews/:search', (req, res) => {
  const { game } = req.params.search;
  db.find(game, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});


module.exports = app;
