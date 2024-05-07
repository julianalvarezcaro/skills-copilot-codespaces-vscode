//Create web server
var express = require('express');
var app = express();

//Create a route
app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

//Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});