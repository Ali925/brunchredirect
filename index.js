const PORT = process.env.PORT || 80;
const express = require('express'),
		http = require('http');

var redirectApp = express () ,
redirectServer = http.createServer(redirectApp);


redirectServer.get('*',function(req,res){  
    res.redirect('https://' + req.headers.host + req.url)
});


redirectServer.listen(PORT);