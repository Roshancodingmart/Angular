const conn = require("../db")

const userTable=(req,res)=>{
    var {page}=req.body;
    conn.client.query(`SELECT
    *
   FROM
      public.new
   ORDER BY
      name
   LIMIT $1 OFFSET 0`,[page],(error,resp)=>{
        conn.client.query(`SELECT * FROM public.new`,(err,respo)=>{

            res.send([{user:resp.rows,count:respo.rowCount}])
        })
        
    })
}
module.exports = {
    userTable
  };