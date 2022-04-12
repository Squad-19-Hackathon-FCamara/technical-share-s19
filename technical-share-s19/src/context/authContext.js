import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  user: null,
  userLogin: () => {},
  userRegister: () => {},
  users: null,
  errorFetchUsers: null,
  errorAuth: null
})

export const AuthContextProvider = props => {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [errorFetchUsers, setErrorFetchUsers] = useState(null)
  const [errorAuth, setErrorAuth] = useState(null)
  //const [token, setToken] = useState("")

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('user')
    const userObject = JSON.parse(userLoggedIn)

    setUser(userObject)
  }, [])

  const userLogin = async userInput => {
    const response = await fetch('http://localhost:3003/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput)
    })

    const data = await response.json()

    if (response.status === 401) {
      setErrorAuth(data.msg)
      return
    }

    const user = data.user
    //const token = data.token
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const userRegister = async userInput => {
    const response = await fetch('http://localhost:3003/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput)
    })

    const data = await response.json()

    if (response.status === 401) {
      setErrorAuth(data.msg)
      return
    }

    const user = data.user
    //const token = data.token
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('http://localhost:3003/users/')
      if (!response.ok)
        throw new Error('Erro ao consultar usuários cadastrados!')
      const data = await response.json()
      const usersList = data.users

      let loadedUsers = []

      for (const key in usersList) {
        loadedUsers.push({
          key: key,
          id: usersList[key]._id,
          name: usersList[key].name,
          email: usersList[key].email,
          role: usersList[key].role,
          tags: usersList[key].tags
        })
      }
      setUsers(loadedUsers)
    }

    getUsers().catch(error => {
      setErrorFetchUsers(error.message)
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: user,
        userLogin: userLogin,
        userRegister: userRegister,
        users: users,
        errorFetchUsers: errorFetchUsers,
        errorAuth: errorAuth
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
