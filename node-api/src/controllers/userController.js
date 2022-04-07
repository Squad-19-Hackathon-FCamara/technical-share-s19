
//Recebe requisicao do routers e solicita no repositorio
const {getUsers, getSpecificUser, getSpecificUserByEmail} = require('../repository/userRepository')
const {createUser, verifyExistingUserByEmail} = require('../services/userServices')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
      expiresIn: 86400
    })
  }


//Lista todos os Usuarios
async function listUsers(req,res) {
    try{
    const users = await getUsers()
    return res.send({users})
    }catch (err) {return res.status(400).send({error:"Erro ao carregar usuarios"})} 
}
//Lista um usuario
async function listUser (req,res) {
    
   try{
       const user = await getSpecificUser(req)
       if(user===null ) throw new Error
    return res.send({user})
   }catch (err) {return res.status(400).send({error:"Erro ao carregar o usuario"})} 

}

// Registra um novo usuario

async function registerUser(req,res) {
    try {
        const { name, email, cargo, profissao, tags, password } = req.body

        const user = {
            name:name,
            email:email, 
            cargo:cargo, 
            profissao:profissao, 
            tags:tags, 
            password:password
        }
    
        const verifyUser = await verifyExistingUserByEmail(user.email)
        
        if (!verifyUser) {
            const newUser = await createUser(user)
    
            return res.status(201).send({ user:newUser })
        }
    } catch(error) {
        return res.status(500).send({ msg: error.message })
    }
  }

  async function loginUser(req,res) {
      try {
        const { email, password } = req.body
        const user = await getSpecificUserByEmail(email)
          if (!user) {
            // return res.status(400).send({ error: 'Usuário não encontrado!' })}
            throw Error('Usuário não encontrado!')
          }

          if (!(await bcrypt.compare(password, user.password))){
            // return res.status(400).send({ error: 'Senha inválida.' })
            throw Error('Senha Inválida!')
        }
            res.send({user, token: generateToken({ id: user.id })})
        } catch (error){
      return res.status(500).send({ msg: error.message })
    }
}

  

module.exports = {listUsers, listUser, registerUser, loginUser}

