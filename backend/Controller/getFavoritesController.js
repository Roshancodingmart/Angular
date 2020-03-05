const conn = require("../db.js");

const getFavorites = (req, res) => {
  var { total } = req.body;
  console.log(total)
  conn.client.query(
    `SELECT * FROM public.favorite ORDER BY
    id
    FETCH FIRST $1 ROW ONLY`,
    [total],
    (error, response) => {
      if (response.rowCount > 0) {
        //   console.log(response.rows)
        res.send(response.rows);
      }
    }
  );
};
module.exports = {
  getFavorites
};
