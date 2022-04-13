import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import AuthContext from '../../context/authContext'
import { io } from 'socket.io-client'
import { Container, ReturnHome, Icon } from './styles'
import ChatContainer from '../../components/ChatContainer'
import ChatList from '../../components/ChatList'

const Chat = () => {
  const { user } = useContext(AuthContext)
  const [currentChat, setCurrentChat] = useState(undefined)

  return (
    <Container>
      <Header />
      <ReturnHome>
        <Link to="/home">
          <Icon>{/* {BackIcon}*/}</Icon>Voltar para Home
        </Link>
      </ReturnHome>

      <div style={{ display: 'flex' }}>
        <ChatList user={user} />
        <ChatContainer user={user} currentChat={currentChat} />
      </div>
    </Container>
  )
}

export default Chat
