//create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];

var server = http.createServer(function(req, res){
    //parse url
    var parseUrl = url.parse(req.url);
    var path = parseUrl.pathname;
    //parse query
    var query = querystring.parse(parseUrl.query);
    if(path === '/'){
        fs.readFile('./index.html', function(err, data){
            if(err){
                res.end('404 Not Found');
            }else{
                res.end(data);
            }
        });
    }else if(path === '/post'){
        fs.readFile('./post.html', function(err, data){
            if(err){
                res.end('404 Not Found');
            }else{
                res.end(data);
            }
        });
    }else if(path === '/comment'){
        comments.push(query);
        res.end('success');
    }else if(path === '/getComments'){
        res.end(JSON.stringify(comments));
    }else{
        res.end('404 Not Found');
    }
});

server.listen(3000, function(){
    console.log('server is running');
});