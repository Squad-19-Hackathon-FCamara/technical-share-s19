const { Router } = require("express");
const express = require ("express")
const router = express.Router()

const Message = require("../models/message")

// add

router.post("/", async (req,res)=>{
    const newMessage = new Message(req.body)

    try{
            const savedMessage = await newMessage.save()
            res.status(200).json(savedMessage)
    }catch(err){
        res.status(500).json(err)
    }

})

// get

module.exports = app => app.use("/message", router );