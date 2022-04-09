const express = require ("express")
const router = express.Router()
const {newChat, findChatById} = require("../repository/chatRepository")

//Cria um novo chat
async function createChat(req,res){
  const {senderId, receiverId} = req.body
  
  try {
    const savedChat = await newChat(senderId,receiverId)     
    return res.status(200).json(savedChat)
  } catch(err){
    res.status(500).json(err)
  }
} 

// Mostra os chats em que um Usuario está

async function getChatById (req,res){
  try {
    const {userId} = req.params.userId
    const chat = await findChatById({members:{ $in:[userId]}})
    res.status(200).json(chat)
  } catch(err) {
    res.status(500).json(err)
  }
}

module.exports = {createChat, getChatById}