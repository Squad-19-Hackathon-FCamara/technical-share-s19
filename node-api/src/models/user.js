const mongoose = require('../database')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  bio: {
    type: String,
    required: true
  },
  technologies: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  },
  experience: { type: Number, required: true } // tratar experiência em anos
  //redes sociais?
})

const User = mongoose.model('User', UserSchema)

module.exports = User
