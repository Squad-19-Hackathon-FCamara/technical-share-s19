//Recebe requisicao do routers e solicita no repositorio
const { getUsers, getSpecificUser } = require('../repository/userRepository')
const {
  createUser,
  verifyExistingUserByEmail,
  validateUser,
  validatePassword
} = require('../services/userServices')

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET_KEY, {
    expiresIn: 86400
  })
}

//Lista todos os Usuarios
async function listUsers(req, res) {
  try {
    const users = await getUsers()
    return res.send({ users })
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao carregar usuarios' })
  }
}

//Lista um usuario especifico
async function listUser(req, res) {
  try {
    const user = await getSpecificUser(req)
    if (user === null) throw new Error()

    return res.send({ user })
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao carregar o usuario' })
  }
}

// Registra um novo usuario
async function registerUser(req, res) {
  try {
    const { name, email, role, tags, password, chats } = req.body

    const user = {
      name: name,
      email: email,
      role: role,
      tags: tags,
      password: password,
      chats: chats
    }

    const verifyUser = await verifyExistingUserByEmail(user.email)

    if (!verifyUser) {
      const newUser = await createUser(user)
      return res.status(201).send({ user: newUser })
    }
  } catch (error) {
    return res.status(401).send({ msg: error.message })
  }
}

// Loga o usuario
async function loginUser(req, res) {
  try {
    const { email, password } = req.body
    
    const user = await validateUser(email)
    const token = await validatePassword(email, password)
    return res.status(200).json({ user: user, token: token })
  } catch (error) {
    return res.status(401).json({ msg: error.message })
  }
}

module.exports = { listUsers, listUser, registerUser, loginUser }
