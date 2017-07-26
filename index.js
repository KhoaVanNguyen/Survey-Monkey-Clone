const express = require('express')
const app = express() // it's just a function




app.get('/', (req,res) => {
    res.send({ hi: 'There' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT)