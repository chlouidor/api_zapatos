
const express = require ("express");

const app = express();

const cors = require("cors");

const puerto = 2008;


const { getZapatos, getZapatoById } = require("./controllers/zapatos.controllers");
app.use(cors());

app.get("/", getZapatos)
app.get("/:id", getZapatoById)

















app.listen(puerto, ()=>{
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});