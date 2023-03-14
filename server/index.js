const express = require('express')
const cors = require('cors')
const app = express()

const http = require('http')

const server = http.createServer(app)

// Routes
const Routes = require('./src/routes')

const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Subroute
app.use('/api/v1', Routes)

server.listen(port, () => console.log(`Sever on with port : ${port}`))