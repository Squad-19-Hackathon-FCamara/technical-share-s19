import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  userLogin: () => {},
  userRegister: () => {},
  users: null,
  errorFetchUsers: null,
  errorAuth: null
})

export const AuthContextProvider = props => {
  const getUserLoggedInFromStorage = localStorage.getItem('user')
  const userLoggedIn = JSON.parse(getUserLoggedInFromStorage)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(userLoggedIn)
  const [users, setUsers] = useState([])
  const [errorFetchUsers, setErrorFetchUsers] = useState(null)
  const [errorAuth, setErrorAuth] = useState(null)
  //const [token, setToken] = useState("")

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('user')
    if (userLoggedIn) {
      const userObject = JSON.parse(userLoggedIn)
      setUser(userObject)
      setIsLoggedIn(true)
    }
  }, [])

  const userLogin = async userInput => {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_URL}/users/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput)
      }
    )

    const data = await response.json()

    if (response.status === 401) {
      setErrorAuth(data.msg)
      return
    }

    const user = data.user
    //const token = data.token
    setUser(user)
    setIsLoggedIn(true)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const userRegister = async userInput => {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_URL}/users/register`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput)
      }
    )

    const data = await response.json()

    if (response.status === 401) {
      setErrorAuth(data.msg)
      return
    }

    const user = data.user
    //const token = data.token
    setUser(user)
    setIsLoggedIn(true)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const userLogout = () => {
    localStorage.removeItem('user')
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACK_URL}/users/`)
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
        userLogout: userLogout,
        userRegister: userRegister,
        users: users,
        isLoggedIn: isLoggedIn,
        errorFetchUsers: errorFetchUsers,
        errorAuth: errorAuth
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
