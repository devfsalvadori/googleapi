const express = require('express');
const sheets = require('../routes/sheets');
const home = require('../routes/home');

module.exports = function(app) {
    app.use(express.json());
    app.use('/', home);
    app.use('/api/sheets', sheets);
    //app.use(error);
}