const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema(
  {
    members: {
      type: Array
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Chat', ChatSchema)