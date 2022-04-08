//
const Message = require('../models/Message')

async function createMessage(message){
    const newMessage  =  new Message(message)
    const savedMessage = await newMessage.save()

    return savedMessage
}

async function messageByChatId(chatId){
    const messages = await Message.find({chatId:chatId})
    return messages
}


module.exports = {createMessage, messageByChatId}
