const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Halo Selamat Datang di Kostin.id')
})

app.get('/kamar1', (req, res) => {
    res.send('Selamat Datang di Kamar 1 ')
})

app.get('/kamar1/kamar2', (req, res) => {
    res.send('Selamat Datang di Kamar 2 dari Kamar 1')
})

app.get('/kamar/:pilih', (req, res) => {
    res.send(`Selamat ${req.params.pilih} Datang di Kak`)
})



app.listen(port, () => {
    console.log('API Menyala Brok')
})