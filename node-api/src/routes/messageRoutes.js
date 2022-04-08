//Request the messages
const express = require('express')
const { saveMessage, getMessagesByChatId } = require('../controllers/messagesController')


const router = express.Router()

router.post('/', saveMessage)
router.get('/:chatId', getMessagesByChatId)

  
module.exports = router
