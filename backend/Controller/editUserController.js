const conn = require("../db.js");
const date = require("date-and-time");
const now = new Date();
const time = date.format(now, "DD/MM/YY h:mm A", true);

const editUser = (req, res) => {
  var { mail, name } = req.body;
  console.log(mail, name, typeof name, typeof mail);
  conn.client.query(
    `UPDATE public.new SET name=$1, updated=$2 WHERE email=$3`,
    [name, time, mail],
    (error, response) => {
      if (error) {
        console.log("error", error);
      }
      if (response.rowCount > 0) {
        res.send({ data: response.rows, msg: "Updated successfully" });
      }
    }
  );
};
module.exports = {
  editUser
};
