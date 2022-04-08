import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import './App.css'
import Chat from './pages/Chat'
import AuthContext from './context/authContext'

const App = () => {
  const { user } = useContext(AuthContext)
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/profile/">
        {user ? <Profile /> : <Redirect to="/" />}
      </Route>
      <Route path="/chat/:chatId">
        {user ? <Chat /> : <Redirect to="/" />}
      </Route>
      <Route path="/">
        {user ? <Home /> : <Login />}
      </Route>
    </Switch>
  )
}

export default App