const express = require('express');
const router = express.Router();
const News = require('../models/News');

router.get('/', async (req, res) => {
  const news = await News.find();
  res.json(news);
});
module.exports = router;
