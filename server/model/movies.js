const db = require('../db');

async function getMovies() {
  const { rows } = await db.query('SELECT * from movies');
  return {
    data: rows,
    code: 200,
  };
}

module.exports = { getMovies };
