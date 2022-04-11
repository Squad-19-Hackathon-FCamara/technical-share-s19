const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema(
  {
    from: { type: String },
    to: { type: String }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Chat', ChatSchema)
