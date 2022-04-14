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

// Procura chats pelo id do usuário logado
async function findChatsByUserId(userId) {
  const chats = await Chat.find({
    $or: [{ from: userId }, { to: userId }]
  })
    .populate({ path: 'to', select: ['_id', 'name'] })
    .populate({ path: 'from', select: ['_id', 'name'] })
  return chats
}

module.exports = { newChat, verifyExistingChat, findChatsByUserId }
