import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  user: null
})

export const AuthContextProvider = props => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  //const [token, setToken] = useState("")

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");
    const userObject = JSON.parse(userLoggedIn);
    
    setUser(userObject);
  }, [])

  const userLogin = async userInput => {
    const response = await fetch('http://localhost:3003/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput)
    })

    const data = await response.json()

    if (response.status === 401) {
      setError(data.msg);
      return;
    }

    const user = data.user
    //const token = data.token
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  const userRegister = async userInput => {
    const response = await fetch('http://localhost:3003/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput)
    })

    const data = await response.json()

    if (response.status === 401) {
      setError(data.msg);
      return;
    }

    const user = data.user
    //const token = data.token
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ user: user, userLogin: userLogin, userRegister: userRegister, error: error }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext