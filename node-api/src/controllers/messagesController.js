const express = require('express')
const router = express.Router()
const {
  createMessage,
  getMessages
} = require('../repository/messageRepository')

// Cria novas mensagens

async function saveMessage(req, res) {
  try {
    const { from, to, message } = req.body
    const savedMessage = await createMessage({
      message: { text: message },
      users: [from, to],
      sender: from
    })
    res.status(200).json({ msg: 'Mensagem adicionada com sucesso.' })
  } catch (err) {
    res.status(500).json(err)
  }
}

// Mostra as mensagens de um Chat

async function getAllMessages(req, res) {
  try {
    const { from, to } = req.body
    const messages = await getMessages({
      users: {
        $all: [from, to]
      }
    })

    const projectMessages = messages.map(msg => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
        _id: msg._id
      }
    })

    res.status(200).json(projectMessages)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { saveMessage, getAllMessages }
