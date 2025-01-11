var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hi this is my besant project" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hi hello" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
