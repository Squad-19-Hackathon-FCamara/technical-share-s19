const express = require('express')
const {
  saveMessage,
  getAllMessages
} = require('../controllers/messagesController')

const router = express.Router()

router.post('/addmessage', saveMessage)
router.post('/getmessages', getAllMessages)

module.exports = router
