//Request the messages
const express = require('express')
const {createChat, getChatById} = require('../controllers/chatController')


const router = express.Router()

router.post('/', createChat)
router.get('/:userId', getChatById)

  
module.exports = router
