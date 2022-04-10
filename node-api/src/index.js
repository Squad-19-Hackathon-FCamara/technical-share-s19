//Initial config

const express = require('express')
const cors = require('cors')
const app = express()
const socket = require('socket.io')

//Initialize cors
app.use(cors())

// Read Json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./routes/index')(app)

// Inicialize port
const server = app.listen(3003, () => console.log('Server Running ' + 3003))

const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true
  }
})

global.onlineUsers = new Map()

io.on('connection', socket => {
  global.chatSocket = socket
  socket.on('add-user', userId => {
    onlineUsers.set(userId, socket.id)
  })

  socket.on('send-msg', data => {
    const sendUserSocket = onlineUsers.get(data.to)
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('msg-receive', data.message)
    }
  })
})
