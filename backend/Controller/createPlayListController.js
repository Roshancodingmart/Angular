const conn = require("../db.js");

const createPlayList = (req, res) => {
  var { photo, name, desc } = req.body;
  conn.client.query(
    `INSERT INTO public.playlist(photo,name,description) VALUES ($1 , $2 , $3)`,
    [photo, name, desc],
    (error, resp) => {
        console.log(error)
        console.log(resp)
        if(resp.rowCount>0){
            res.send({msg:"playlist created"});
        }
        if(error){
            res.send({msg:"playlist already exists"})
        }
    }
  );
};
module.exports = {
  createPlayList
};
