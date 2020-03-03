const conn = require("../db");

const addToPlayList = (req, res) => {
  var { id, list } = req.body;
  conn.client.query(
    `SELECT * FROM public.addplaylist WHERE movie=$1`,
    [id],
    (error, response) => {
      if (error) {
        console.log(error);
      }
      if (response.rowCount == 0) {
        conn.client.query(
          `INSERT INTO public.addplaylist(movie,playlist) VALUES ($1 , $2)`,
          [id, list],
          (err, resp) => {
              if(err){
                  console.log(err)
              }
              if(resp.rowCount>0){
                  res.send({msg:"Added to Playlist"})
              }
          }
        );
      }
      else{
          res.send({msg:"already in play list"})
      }
    }
  );
};
module.exports = {
  addToPlayList
};
