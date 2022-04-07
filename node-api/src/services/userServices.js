
const {getSpecificUserByEmail, generateUser} = require('../repository/userRepository')
const router = require('../routes/userRoutes')


// Verifica Existencia de um Usuario pelo email
async function verifyExistingUserByEmail(email) {   
    const verifyEmail = await getSpecificUserByEmail(email)

    if (verifyEmail) {
        throw Error('Usuário já existe!')
    }    

    return false;
}

// Cria o Usuario 

async function createUser(user) {
    return await generateUser(user) 
    
}




module.exports = {verifyExistingUserByEmail, createUser}