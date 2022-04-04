const { Router } = require("express");
const express = require ("express")
const router = express.Router()

const Chat = require("../models/Chat")

//new chat
router.post("/",async (req,res) =>{
    const newChat = new Chat({
    members: [req.body.senderId, req.body.receiverId],
    })
    try {
        const savedChat = await newChat.save()
        res.status(200).json(savedChat)
    }catch(err){
        res.status(500).json(err)
    }

}) 

// get chat of an user

module.exports = app => app.use("/chat", router );