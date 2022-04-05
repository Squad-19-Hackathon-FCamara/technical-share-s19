import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './App.css'

const App = () => {
  return (
    <div>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/profile/">
        <Profile />
      </Route>
    </div>
  )
}

export default App
