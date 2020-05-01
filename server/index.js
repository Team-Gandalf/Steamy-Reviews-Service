const db = require('../db/index.js');
const express = require('express');

const app = express();

// MIDDLEWARE
const bodyParser = require('body-parser');

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());

// ROUTES
app.get('/api/reviews', (req, res) => {
  const { game } = req.body;
  db.find(game, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});


// PORT
const port = 4200;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
