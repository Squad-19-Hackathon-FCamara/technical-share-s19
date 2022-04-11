const Chat = require('../models/Chat')

// Cria um novo chat
async function newChat(from, to) {
  const chat = new Chat({ from, to })
  const savedChat = await chat.save()
  return savedChat
}

// Verifica se já existe Chat para os membros informados

async function verifyExistingChat(from, to) {
  const existingChat = await Chat.findOne({
    $and: [{ from, to }]
  })
  return existingChat
}

// const existingChat = await Chat.findOne({
//   members: { $and: [{$in: [from]}, {$in: [to]}] }
// })

// Procura um chat pelo Id do usuario
async function findChatsByUserId(userId) {
  const chat = await Chat.find({ $all: [userId] })
  return chat
}

module.exports = { newChat, verifyExistingChat, findChatsByUserId }
