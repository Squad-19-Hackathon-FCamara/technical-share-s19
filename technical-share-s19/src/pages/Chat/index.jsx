import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import AuthContext from '../../context/authContext'
import { io } from 'socket.io-client'
import {
  Container,
  ReturnHome,
  Icon,
} from './styles'
import ChatContainer from '../../components/ChatContainer'
import ChatList from '../../components/ChatList'

const Chat = () => {
  const socket = useRef()
  const { user } = useContext(AuthContext)
  const [currentChat, setCurrentChat] = useState(undefined)

  useEffect(() => {
    socket.current = io('http://localhost:3003')
    socket.current.emit('add-user', user._id)
  }, [])

  return (
    <Container>
      <Header />
      <ReturnHome>
        <Link to="/home">
          <Icon>{/* {BackIcon}*/}</Icon>Voltar para Home
        </Link>
      </ReturnHome>
      <ChatList user={user} />
      <ChatContainer user={user} socket={socket} currentChat={currentChat} />
    </Container>
  )
}

export default Chat