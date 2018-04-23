const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const recordRouter = require('./routes/record.route');
// this will live in the db shortly


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// routes (get, post, put delete requests)
app.use('/record', recordRouter);

app.listen(PORT, () => {
console.log(`up and runnning on port ${PORT}`);
});

   