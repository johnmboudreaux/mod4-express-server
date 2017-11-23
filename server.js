const express = require('express');
const app = express();
const path = require('path');
const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};
const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/json', (request, response) => {
  response.status(200).json({"name": "Robbie"});
});

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
