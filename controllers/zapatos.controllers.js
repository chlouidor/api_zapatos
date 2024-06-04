const { request ,response }=require("express");
const { zapatos } = require("../zapatos");

const getZapatos = (req , res)=> {

    return res.json({
        ok:true,
        statusCode:200,
        zapatos
    });
}

const getZapatoById = ( req = request , res = response )=> {

        let id = parseInt(req.params.id);

        let zapatoABuscar ="";

        zapatoABuscar = zapatos.find((zapato)=>{
            return zapato.id === id;
        });

        if (zapatoABuscar){
            return res.json({
                ok:true,
                statusCode:200,
                zapatoABuscar
            });
        }else{
            return res.json({
                ok:true,
                statusCode:404,
                msg:"no hay zapatos con ese id"
            });
        }
}

module.exports ={
    getZapatos,
    getZapatoById
}