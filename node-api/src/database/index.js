const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/node-api', { useMongoClient: true })
mongoose.Promise = global.Promise
