const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    console.log(`Es es un log del entorno: ${process.env.NODE_ENV}`)
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log(`App escuchando en puerto ${PORT}`)
})
