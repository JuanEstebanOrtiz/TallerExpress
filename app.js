const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const alert = require('alert-node');

const routes = require('./routes/index.js');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'pug');

app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});

// bodyParser

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// routes

app.use(routes);

app.use(express.static(path.join(__dirname,'public')));

// escuchando el puerto

app.listen(app.get('port'), () =>{
    console.log('escuchando puerto', app.get('port'))
});