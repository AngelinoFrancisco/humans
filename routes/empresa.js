const express = require("express")
const empresa = express.Router()


empresa.get("/empresa", (req,res)=>{
    res.render("empresa/main")
})

empresa.get("/empresa/vagas", (req,res)=>{
    res.render("empresa/vagas")
})
empresa.get("/empresa/cvs", (req,res)=>{
    res.render("empresa/cvs")
})

empresa.get("/empresa/menu", (req,res)=>{
    res.render("empresa/menu")
})

empresa.get("/empresa/perfil", (req,res)=>{
    res.render("empresa/perfil")
})

module.exports = empresa