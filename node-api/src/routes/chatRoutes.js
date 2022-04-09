//Request the messages
const express = require('express')
const {
  createChat,
  getChatByMentorId
} = require('../controllers/chatController')

const router = express.Router()

router.post('/', createChat)
router.get('/:mentorId', getChatByMentorId)

module.exports = router
