const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Users = require('../models/user');
const router = express.Router()

// router.use(authMiddleware); Verifica a autenticação através do tokenId do usuário

// Lista todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await Users.find();

    return res.send({ users });
  } catch (err) {
    return res.status(400).send({error: 'Error loading Users'});
  }
})

// Exibindo um único usuário
router.get('/:userId', async (req, res) => {
  try {
    const users = await Users.findById(req.params.userId);

    return res.send({ users });
  } catch (err) {
    return res.status(400).send({error: 'Error loading Users'});
  }
})

module.exports = app => app.use('/userList', router)