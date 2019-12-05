//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/www'));

app.get('*', function (req, res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/www/index.html'));
});

// For Main Server..
const port = process.env.PORT || 3600;
app.listen(port, () => console.log(`Server is running at port:${port}`));

// TEST ON LOCAL MOBILE SERVER...
// const port = '192.168.1.107' || 'localhost';
// app.listen(4500, port, () => console.log(`Server is running at port:${port}`));
