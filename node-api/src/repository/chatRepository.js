const Chat = require('../models/Chat')

// new chat
async function newChat(senderId,receiverId) { 
    const chat = new Chat({members:[senderId,receiverId]})
    const savedChat = await chat.save()
    return savedChat
}

//get chat by Id
async function findChatById(userId) {

    const chat = await Chat.find({userId})
    return chat
    

}


module.exports = {newChat, findChatById}
