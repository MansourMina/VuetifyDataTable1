const express = require('express');
const {
  getMovies,

  // eslint-disable-next-line import/no-unresolved
} = require('../controllers/movies');

const router = express.Router();

router.get('/movies', getMovies);

module.exports = router;
