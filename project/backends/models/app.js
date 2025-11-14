const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const newsRoutes = require('./routes/newsRoutes');
app.use('/api/products', productRoutes);
app.use('/api/news', newsRoutes);
module.exports = app;
