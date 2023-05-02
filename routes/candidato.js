const express = require("express")
const candidato = express.Router()


candidato.get("/candidato", (req, res) => {
    res.render("candidato/main")
})

candidato.get("/candidato/perfil", (req, res) => {
    res.render("candidato/perfil")
})

candidato.get("/candidato/pendentes", (req, res) => {
    res.render("candidato/pendentes")
})

candidato.get("/candidato/vagas", (req, res) => {
    res.render("candidato/vagas")
}) 

candidato.get("/candidato/menu", (req, res) => {
    res.render("candidato/menu")
})
 

module.exports = candidato