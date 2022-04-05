const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./app/controllers/index')(app)

app.listen(3003)