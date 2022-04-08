import { createContext, useState } from 'react'

const AuthContext = createContext({
  user: null
})

export const AuthContextProvider = props => {
  const [user, setUser] = useState(null)
  //const [token, setToken] = useState("")

  const userLogin = async userInput => {
    const response = await fetch('http://localhost:3003/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput)
    })
    const data = await response.json()
    const user = data.user
    //const token = data.token
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ user: user, userLogin: userLogin }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
