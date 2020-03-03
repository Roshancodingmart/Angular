const conn = require("../db");

const watched = (req,res) =>{
    var {id} = req.body
    conn.client.query(`SELECT * FROM public.watched WHERE id=$1`,[id],(error,response)=>
    {
        if(response.rowCount>0){
            conn.client.query(`DELETE FROM public.watched WHERE id=$1`,[id],(er,re)=>{
                if(re.rowCount>0){
                    res.send({msg:"Removed from Watched",bol:false})
                }
            })
        }
        else{
            conn.client.query(`INSERT INTO public.watched(id) VALUES ($1)`,
            [id],(err,resp)=>{
                if(resp.rowCount>0){
                    res.send({msg:"Added to Watched",bol:true})
                }
            })
        }
    })
}
module.exports = {
    watched
  };