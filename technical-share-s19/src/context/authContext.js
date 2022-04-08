import { createContext, useState } from 'react'

const AuthContext = createContext({
  user: null
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const userLogin = async (userInput) => {
    const response = await fetch('http://localhost:3003/users/login', { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userInput) })

    const data = await response.json();

    setUser(data);

    console.log(user);
  }

  return (
    <AuthContext.Provider value={{ user: user, userLogin: userLogin }}>{props.children}</AuthContext.Provider>
  )
}

export default AuthContext