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
  db.find(req.params.search, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

app.patch('/api/reviews/:id', (req, res) => {
  let id = req.params.id;
  let reviewId = req.body.reviewId;
  let field = req.body.field;
  let value = req.body.value;
  db.update(id, reviewId, field, value, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(204).json(results);
    }
  });
});


module.exports = app;
