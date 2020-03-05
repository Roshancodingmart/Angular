const conn = require("../db.js");

const getWatchList = (req, res) => {
    var {total}=req.body;
    conn.client.query(`SELECT
    *
   FROM
      public.watch
   ORDER BY
      id
   LIMIT $1 OFFSET 0`,[total],(error,response)=>{
        if(response.rowCount>0){
            // console.log(response.rows)
            res.send(response.rows)
        }
    })
};
module.exports = {
  getWatchList
};
