import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import AuthContext from '../../context/authContext'
import { Container, ReturnHome, Icon } from './styles'
import ChatContainer from '../../components/ChatContainer'
import ChatList from '../../components/ChatList'

const Chat = () => {
  const { user } = useContext(AuthContext)

  return (
    <Container>
      <Header />
      <ReturnHome>
        <Link to="/">
          <Icon>{/* {BackIcon}*/}</Icon>Voltar para Home
        </Link>
      </ReturnHome>

      <div style={{ display: 'flex' }}>
        <ChatList user={user} />
        <ChatContainer user={user} />
      </div>
    </Container>
  )
}

export default Chat
