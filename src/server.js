'use strict';

const express = require('express');
const handleLog = require('./middleware/logger.js');
const validateName = require('./middleware/validator.js');
const handle404 = require('./error-handlers/404.js');
const handle500 = require('./error-handlers/500.js');

const app = express();



app.use(express.json());
app.use(handleLog);

app.get('/', (request, response, next) => {
  response.send('King Snorlax approves and welcomes you to his server');
  next();
});

app.get('/person', validateName);


app.use(handle404);

app.use(handle500);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Jigglypuff is listening on port' + PORT);
    });
  },
};
