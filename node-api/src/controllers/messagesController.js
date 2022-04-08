const express = require ("express")
const router = express.Router()
const {createMessage, messageByChatId} = require("../repository/messageRepository")

// add new messages

async function saveMessage(req,res) {

    try{
         const savedMessage = await createMessage(req.body)
            res.status(200).json(savedMessage)
    }catch(err){
        res.status(500).json(err)
    }

}

// get the messages from a chat 

async function getMessagesByChatId(req,res) {
    try{
        const {chatId} = req.params    
        const messages = await messageByChatId(chatId)
        res.status(200).json(messages)
    }catch(error){
        res.status(500).json(error)
    }
}

module.exports = {saveMessage, getMessagesByChatId}
