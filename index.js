require('dotenv').config()
const express = require('express')

const server = express()
const PORT = process.env.PORT || 8080

server.use(express.json())

server.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'foo'},
        { id: 2, username: 'bar'},
        { id: 3, username: 'Dillon'},
        { id: 4, username: 'Maks'}
    ])
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})