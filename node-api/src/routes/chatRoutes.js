//Request the messages
const express = require('express')
const {
  createChat,
  getAllChatsByUserId
} = require('../controllers/chatController')

const router = express.Router()

router.post('/create', createChat)
router.post('/getallchats', getAllChatsByUserId)

module.exports = router
