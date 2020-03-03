const conn = require("../db.js");

const getFavorites = (req, res) => {
    conn.client.query(`SELECT * FROM public.favorite`,(error,response)=>{
        if(response.rowCount>0){
            res.send(response.rows)
        }
    })
};
module.exports = {
  getFavorites
};
