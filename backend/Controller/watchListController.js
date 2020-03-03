const conn = require("../db");

const watchList = (req,res) =>{
    var {id} = req.body
    conn.client.query(`SELECT * FROM public.watch WHERE id=$1`,[id],(error,response)=>
    {
        if(response.rowCount>0){
            conn.client.query(`DELETE FROM public.watch WHERE id=$1`,[id],(er,re)=>{
                if(re.rowCount>0){
                    res.send({msg:"Removed from Watchlist",bol:false})
                }
            })
        }
        else{
            conn.client.query(`INSERT INTO public.watch(id) VALUES ($1)`,
            [id],(err,resp)=>{
                if(resp.rowCount>0){
                    res.send({msg:"Added to Watchlist",bol:true})
                }
            })
        }
    })
}
module.exports = {
    watchList
  };