const app = require('./app');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecom-news');
app.listen(5000, () => console.log('Server on 5000'));

