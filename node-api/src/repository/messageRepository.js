const Message = require('../models/Message')

// Cria uma nova mensagem
async function createMessage(message){
    const newMessage  =  new Message(message)
    const savedMessage = await newMessage.save()

    return savedMessage
}

// Seleciona as mensagens de um chat pelo seu Id
async function messageByChatId(chatId){
    const messages = await Message.find({chatId:chatId})
    return messages
}


module.exports = {createMessage, messageByChatId}
