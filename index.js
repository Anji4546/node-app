//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('Piedistrict Private Limited urope and United States.');
});
//listen to port 3000 by default
var port = process.env.PORT || 3000
var server = app.listen(port, () => {
    console.log('App listening on port ', port);
});

function stop() {
    server.close();
}
 
module.exports = app;
module.exports.stop = stop;
