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
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <Switch>
      <Route exact path="/">
        {isLoggedIn ? <Home /> : <Login />}
      </Route>
      <Route path="/register">
        {isLoggedIn ? <Redirect to="/" /> : <Register />}
      </Route>
      <Route path="/profile/">
        {isLoggedIn ? <Profile /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/chat">
        {isLoggedIn ? <Chat /> : <Redirect to="/" />}
      </Route>
      <Route path="/chat/:mentorId">
        {isLoggedIn ? <Chat /> : <Redirect to="/" />}
      </Route>
    </Switch>
  )
}

export default App
