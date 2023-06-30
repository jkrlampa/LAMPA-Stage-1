var http = require('http');

http.createServer(function (req, res) {
  res.end('Python');
}).listen(3000, () =>
console.log('Example app listening on port 3000!'),
);

//While taking note of the correct directory, I typed 'node Stage1.js' to initiate the
//NodeJS application. Opening the port 3000 on the internet browser, "Python" appears.