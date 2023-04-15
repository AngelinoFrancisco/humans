
const express = require("express")
const ejs = require("ejs")
const bodyparser = require("body-parser")
const app = express()
const candidato = require("./routes/candidato")
const empresa = require("./routes/empresa")
const register = require("./routes/register")


app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



app.use(candidato)
app.use(empresa)
app.use(register)

app.listen(2500, function(){
    console.log("server is up ...", 2500)
})