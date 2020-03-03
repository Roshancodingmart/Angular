const conn = require("../db.js");

const getList = (req, res) => {
  var {id}=req.body;
  console.log(id)
  conn.client.query(`SELECT * FROM public.addplaylist WHERE playlist=$1`,[id], (error, response) => {
    // console.log(error);
    if (response.rowCount > 0) {
      res.send({ list: response.rows });
    }
    else{
      ({msg:"No movies added yet!"})
    }
  });
};
module.exports = {
  getList
};
