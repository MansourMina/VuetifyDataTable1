const asyncHandler = require('express-async-handler');

const carModel = require('../model/movies.js');

const getMovies = asyncHandler(async (req, res) => {
  const { data, code } = await carModel.getMovies();
  res.status(code).json(data);
});

module.exports = { getMovies };
