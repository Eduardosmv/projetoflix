require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "FUNCIONANDO"
    })
})
app.get("/modulos", async (req, res) => {
    const modulos = await db.selectCustomers();
    res.json(modulos);
})
   

app.listen(port);

console.log("Backend rodando");