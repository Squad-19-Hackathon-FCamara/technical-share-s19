const Chat = require('../models/Chat')

// Cria um novo chat
async function newChat(senderId,receiverId) { 
    const chat = new Chat({members:[senderId,receiverId]})
    const savedChat = await chat.save()
    return savedChat
}

// Procura um chat pelo Id do usuario
async function findChatById(userId) {

    const chat = await Chat.find({userId})
    return chat
    

}


module.exports = {newChat, findChatById}
