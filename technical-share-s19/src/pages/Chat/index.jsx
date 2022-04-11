import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BackIcon } from '../../assets/icons'
import Header from '../../components/Header'
import AuthContext from '../../context/authContext'
import axios from 'axios'
import { io } from 'socket.io-client'
import {
  ChatHeader,
  Container,
  ReturnHome,
  Icon,
  ChatBox,
  MessageForm
} from './styles'
import ChatContainer from '../../components/ChatContainer'
import ChatList from '../../components/ChatList'

const Chat = () => {
  // const socket = useRef()
  const { user } = useContext(AuthContext)
  const [currentChat, setCurrentChat] = useState(undefined)

  const handleChatChange = chat => {
    setCurrentChat(chat)
  }

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
