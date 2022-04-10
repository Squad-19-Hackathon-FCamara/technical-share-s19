const express = require('express')
const userRouter = require('./userRoutes')
const chatRouter = require('./chatRoutes')
const messageRouter = require('./messageRoutes')

const routes = express.Router()

routes.use('/users', userRouter)
routes.use('/chat', chatRouter)
routes.use('/message', messageRouter)

module.exports = app => app.use(routes)
