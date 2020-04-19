import app from './app';
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
//const bodyparser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
//app.use(bodyparser.urlencoded({ extended: true }))

app.listen(3333);