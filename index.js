const PORT = process.env.PORT || 80;
const express = require('express'),
		http = require('http');

var redirectApp = express () ,
redirectServer = http.createServer(redirectApp);

redirectApp.use(function requireHTTPS(req, res, next) {
  if (!req.secure) {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
})

redirectServer.listen(PORT);