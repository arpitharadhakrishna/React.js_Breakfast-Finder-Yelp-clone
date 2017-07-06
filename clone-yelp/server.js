const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Yelp = require('node-yelp-fusion');
var CircularJSON = require('circular-json');
const port = 8000;

var yelp=new Yelp({ id: 'Dusf4Ix67-c2BN57hFwqFg' , secret:'5u9tWyw8tt5MbbNt5QFHaRclz0tzpdY4GnnWHGzN3Kwis8aESnMMWoMlGzaTXLsm'});


app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app,yelp,CircularJSON);
 app.listen(port, () => {
   console.log('We are live on ' + port);
 });