import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css'
import Chat from './pages/Chat'
import AuthContext from './context/authContext'

const App = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <Switch>
      <Route path="/">{user ? <Home /> : <Login />}</Route>
      <Route path="/profile/">
        <Profile />
      </Route>
      <Route path="/chat/:chatId">
        <Chat />
      </Route>
    </Switch>
  )
}

export default App
