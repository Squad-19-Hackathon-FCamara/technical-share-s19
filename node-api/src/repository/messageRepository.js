const Message = require('../models/Message')

// Cria uma nova mensagem
async function createMessage(message) {
  const newMessage = Message.create(message)
  return newMessage
}

// Seleciona as mensagens de um chat pelo seu Id
async function getMessages(members) {
  const messages = await Message.find(members).sort({ updatedAt: 1 })
  return messages
}

module.exports = { createMessage, getMessages }
