const conn = require("../db.js");

const getWatched = (req, res) => {
    conn.client.query(`SELECT * FROM public.watched`,(error,response)=>{
        if(response.rowCount>0){
            res.send(response.rows)
        }
    })
};
module.exports = {
  getWatched
};
