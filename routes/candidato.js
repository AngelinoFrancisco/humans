const express = require("express")
const candidato = express.Router()


candidato.get("/candidato", (req, res) => {
    res.render("candidato/main")
})
 

module.exports = candidato