const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nodeapi')
mongoose.Promise = global.Promise

module.exports = mongoose
