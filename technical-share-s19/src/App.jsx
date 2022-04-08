import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css'
import Chat from './pages/Chat'

const App = () => {
  return (
    <div>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile/">
        <Profile />
      </Route>
      <Route path="/chat/:chatId">
        <Chat />
      </Route>
    </div>
  )
}

export default App
