const {
  getSpecificUserByEmail,
  generateUser
} = require('../repository/userRepository')
const router = require('../routes/userRoutes')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET_KEY, {
    expiresIn: 86400
  })
}

// Verifica Existencia de um Usuario pelo email
async function verifyExistingUserByEmail(email) {
  const verifyEmail = await getSpecificUserByEmail(email)

  if (verifyEmail) {
    throw Error('Usuário já existe!')
  }

  return false
}

// Cria o Usuario

async function createUser(user) {
  return await generateUser(user)
}

// Validacao o Usuario
async function validateUser(email) {
  const user = await getSpecificUserByEmail(email)

  if (!user) {
    throw Error('Usuário não encontrado!')
  }

  return user
}
// Valida a Senha
async function validatePassword(email, password) {
  const user = await getSpecificUserByEmail(email)
  if (!(await bcrypt.compare(password, user.password))) {
    throw Error('Senha Inválida!')
  }
  const token = generateToken({ id: user.id })
  return token
}

module.exports = {
  verifyExistingUserByEmail,
  createUser,
  validateUser,
  validatePassword
}
