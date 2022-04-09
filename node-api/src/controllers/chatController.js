const express = require('express')
const router = express.Router()
const { newChat, findChatByMentorId } = require('../repository/chatRepository')

//Cria um novo chat
async function createChat(req, res) {
  const { senderId, receiverId } = req.body

  try {
    const savedChat = await newChat(senderId, receiverId)
    return res.status(200).json(savedChat)
  } catch (err) {
    res.status(500).json(err)
  }
}

// Mostra os chats em que um Usuario está

async function getChatByMentorId(req, res) {
  try {
    const { mentorId } = req.params.mentorId
    const chat = await findChatByMentorId({ members: { $in: [mentorId] } })

    if (!chat) {
      throw Error('Chat não encontrado!')
    }

    res.status(200).json(chat)
  } catch (error) {
    return res.status(401).json({ msg: error.message })
  }
}

module.exports = { createChat, getChatByMentorId }
