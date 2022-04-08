const User = require('../models/user')
const Users = require('../models/user')


// Procura um usuario pelo email
async function getSpecificUserByEmail(email) {
    const user = await User.findOne({email})
    return user
}


// Cria um novo Usuario 
async function generateUser(user) {
    const newUser = await User.create(user)
    return newUser
}

//Recebe a lista de Usuarios 
async function getUsers() {
    const users = await Users.find()
    return users
}

//Recebe um usuario especifico pelo Id
async function getSpecificUser(req) {
    const user = await Users.findById(req.params.userId)
    return user
}


module.exports = {getUsers, getSpecificUser, getSpecificUserByEmail, generateUser}