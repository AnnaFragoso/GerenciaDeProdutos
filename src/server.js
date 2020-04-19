import app from './app';
const path = require('path');
const expressLayouts = require('express-ejs-layouts')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts)

app.listen(3333);