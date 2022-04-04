const { Router } = require("express");
const express = require ("express")
const router = express.Router()

const Message = require("../models/message")

module.exports = app => app.use("/message", router );