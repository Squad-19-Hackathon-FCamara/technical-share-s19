const express = require('express')
const {listUsers, listUser, loginUser, registerUser} = require('../controllers/userController')
// const authMiddleware = require('../middlewares/auth');

const router = express.Router()

router.get('/', listUsers);
router.get('/:userId', listUser);
router.post('/register', registerUser)
router.post('/login', loginUser)

  
module.exports = router
