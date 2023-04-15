const express = require("express")
const register = express.Router()


register.get("/", (req,res)=>{
    res.render("login")
})

register.post("/", (req,res)=>{
    res.render("login")
})

register.get("/candidato/registro", (req,res)=>{
    res.render("candidato/registro")
})

register.get("/empresa/registro", (req,res)=>{
    res.render("empresa/registro")
})


register.post("/candidato/registro", (req,res)=>{
    res.render("candidato/registro")
})

register.post("/empresa/registro", (req,res)=>{
    res.render("registro")
})

module.exports = register