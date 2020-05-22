const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, () => {
  console.log('Server started');
});