const express = require('express')
const app = express()
const port = process.env.PORT || 8081

app.get("/", (req, res) => {
    res.send('tudo ok')
})

app.listen(port, () => {
    console.log('Rodando na porta: ', port)
})