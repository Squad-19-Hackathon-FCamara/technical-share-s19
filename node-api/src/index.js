//Initial config

const express = require('express')
const cors = require('cors')
const app = express()

//Initialize cors
app.use(cors())

// Read Json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./controllers/index')(app)

// Inicialize port
app.listen(3003)