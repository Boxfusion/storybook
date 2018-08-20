const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/config')();

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));