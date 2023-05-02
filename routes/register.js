const express = require("express")
const register = express.Router()
const Candidato = require("../models/candidato")

register.get("/", (req,res)=>{
    res.render("login")
})

register.post("/", (req,res)=>{
    res.render("login")
})

register.get("/candidato/registro", async (req,res)=>{
    const user ={
        nome:req.body.nome,
        password:req.body.password,
        ano:req.body.nascimento
    }

    if(user.nome == null || user.password == null || user.ano == null){
        return res.redirect("/")
    }
    await  Candidato.create(user).then(()=>{

        res.redirect("/")
    
    }).catch(evt=>{

    res.redirect("/candidato/registro") 

    })
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