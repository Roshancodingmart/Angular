const conn = require("../db");

const favorite = (req,res) =>{
    var {id} = req.body
    conn.client.query(`SELECT * FROM public.favorite WHERE id=$1`,[id],(error,response)=>
    {
        if(response.rowCount>0){
            conn.client.query(`DELETE FROM public.favorite WHERE id=$1`,[id],(er,re)=>{
                if(re.rowCount>0){
                    res.send({msg:"Removed from Favorites",bol:false})
                }
            })
        }
        else{
            conn.client.query(`INSERT INTO public.favorite(id) VALUES ($1)`,
            [id],(err,resp)=>{
                if(resp.rowCount>0){
                    res.send({msg:"Added to Favorites",bol:true})
                }
            })
        }
    })
}
module.exports = {
    favorite
  };