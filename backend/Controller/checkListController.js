const conn = require("../db");

const checkList = (req, res) => {
  var { id } = req.body;
  conn.client.query(
    `SELECT * FROM public.watch WHERE id=$1`,
    [id],
    (error, response) => {
      conn.client.query(
        `SELECT * FROM public.favorite WHERE id=$1`,
        [id],
        (err, resp) => {
          conn.client.query(
            `SELECT * FROM public.watched WHERE id=$1`,
            [id],
            (erro, respo) => {
              if (response.rowCount > 0 && resp.rowCount > 0 && respo.rowCount>0) {
                res.send({ status: true, fav: true ,watched_bol:true});
              }
              else if (response.rowCount == 0 && resp.rowCount > 0 && respo.rowCount>0) {
                res.send({ status: false, fav: true ,watched_bol:true});
              } 
              else if (response.rowCount > 0 && resp.rowCount == 0 && respo.rowCount>0) {
                res.send({ status: true, fav: false ,watched_bol:true});
              }
              else if (response.rowCount > 0 && resp.rowCount > 0 && respo.rowCount==0) {
                res.send({ status: true, fav: true ,watched_bol:false});
              } 
              else if (response.rowCount == 0 && resp.rowCount == 0 && respo.rowCount>0) {
                res.send({ status: false, fav: false ,watched_bol:true});
              }
              else if (response.rowCount == 0 && resp.rowCount > 0 && respo.rowCount==0) {
                res.send({ status: false, fav: true ,watched_bol:false});
              }
              else if (response.rowCount > 0 && resp.rowCount == 0 && respo.rowCount==0) {
                res.send({ status: true, fav: false ,watched_bol:false});
              }
              else {
                res.send({ status: false, fav: false ,watched_bol:false});
              }
            }
          );
        }
      );
    }
  );
};
module.exports = {
  checkList
};
