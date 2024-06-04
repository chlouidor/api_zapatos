const { request ,response }=require("express");
const { botas } = require("../botas");

const getBotas = (req , res)=> {

    return res.json({
        ok:true,
        statusCode:200,
        botas
    });
}

const getBotaById = ( req = request , res = response )=> {

        let id_b = parseInt(req.params.id);

        let botaABuscar ="";

        botaABuscar = botas.find((bota)=>{
            return bota.id === id_b;
        });

        if (botaABuscar){
            return res.json({
                ok:true,
                statusCode:200,
                botaABuscar
            });
        }else{
            return res.json({
                ok:true,
                statusCode:404,
                msg:"no hay botas con ese id"
            });
        }
}

module.exports ={
    getBotas,
    getBotaById
}