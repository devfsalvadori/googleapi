//const { port } = require('./config/config');
const express = require('express');
const app = express();

require('./startup/routes')(app);



const PORT = 8080;
const server = app.listen(PORT, () => { console.log(`App listening on port: ${PORT}`)});

module.exports = server;
