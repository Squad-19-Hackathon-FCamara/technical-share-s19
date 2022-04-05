const express = require ("express")
const router = express.Router()

const Message = require("../models/message")

// add new messages

router.post("/", async (req,res)=>{
    const newMessage = new Message(req.body)

    try{
            const savedMessage = await newMessage.save()
            res.status(200).json(savedMessage)
    }catch(err){
        res.status(500).json(err)
    }

})

// get the messages from a chat

router.get ("/:chatId", async (req,res)=>{
    try{
        const messages = await Message.find({
        chatId: req.params.chatId,
    })
    res.status(200).json(messages)
}catch(err){
    res.status(500).json(err)
}
})

module.exports = app => app.use("/message", router );