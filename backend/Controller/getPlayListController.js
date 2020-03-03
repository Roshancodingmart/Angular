const conn = require("../db.js");

const getPlayList = (req, res) => {
  conn.client.query(`SELECT * FROM public.playlist`, (error, response) => {
    console.log(error);
    if (response.rowCount > 0) {
      res.send({ list: response.rows });
    }
  });
};
module.exports = {
  getPlayList
};
