const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
mongoose.Promise = global.Promise

module.exports = mongoose
