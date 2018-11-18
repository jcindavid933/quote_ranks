const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const path = require('path');
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/routes')(app);
app.listen(8000, function() {
    console.log("listening on port 8000");
})
