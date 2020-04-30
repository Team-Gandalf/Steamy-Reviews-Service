const express = require('express');
let app = express();

// MIDDLEWARE
const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

// ROUTES
app.get('/api/reviews', (req, res) => {

});


// PORT
let port = 4200;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})