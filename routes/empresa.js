const express = require("express")
const empresa = express.Router()


empresa.get("/empresa", (req,res)=>{
    res.render("empresa/main")
})

module.exports = empresa