const User = require('../models/user')
const Users = require('../models/user')


// Seleciona usario por email
async function getSpecificUserByEmail(email) {
    const user = await User.findOne({email})
    return user
}


// Cria o Usuario (Repetido da linha 4 ?)
async function generateUser(user) {
    const newUser = await User.create(user)
    return newUser
}

//Recebe a lista de Usuarios 
async function getUsers() {
    const users = await Users.find()
    return users
}

//Recebe um usuario especifico 
async function getSpecificUser(req) {
    const user = await Users.findById(req.params.userId)
    return user
}


module.exports = {getUsers, getSpecificUser, getSpecificUserByEmail, generateUser}