const express = require('express')
const router = express.Router()
const {
  newChat,
  verifyExistingChat,
  findChatsByUserId
} = require('../repository/chatRepository')

//Cria um novo chat
async function createChat(req, res) {
  try {
    const { from, to } = req.body

    const existingChat = await verifyExistingChat(from, to)
    const existingChatReverse = await verifyExistingChat(to, from)

    if (existingChat || existingChatReverse) {
      return
    }

    const savedChat = await newChat(from, to)

    return res.status(200).json(savedChat)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

// Recebe todos os chats que o usuário participa

async function getAllChatsByUserId(req, res) {
  try {
    const { userId } = req.body

    const chats = await findChatsByUserId(userId)

    return res.status(200).json(chats)
  } catch (error) {
    return res.status(400).send({ msg: 'Error while getting user chats.' })
  }
}

module.exports = { createChat, getAllChatsByUserId }
