import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BackIcon } from '../../assets/icons'
import Header from '../../components/Header'
import AuthContext from '../../context/authContext'
import {
  ChatHeader,
  Container,
  ReturnHome,
  Icon,
  ChatBox,
  MessageInput
} from './styles'

const Chat = () => {
  const [messages, setMessages] = useState(null)
  const { user } = useContext(AuthContext)
  const { mentorId } = useParams()

  let chatMembers = { senderId: user._id, receiverId: mentorId }

  useEffect(() => {
    async function getChatFromDatabase() {
      const getChatByMentorId = await fetch(
        'http://localhost:3003/chat/' + mentorId
      )
      const response = await getChatByMentorId
      const existingChat = await response.json()
      console.log(existingChat)

      if (!existingChat.length) {
        const createNewChat = await fetch('http://localhost:3003/chat/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(chatMembers)
        })
        const response = await createNewChat
        console.log(response)
      }
    }
    getChatFromDatabase()
  }, [])

  return (
    <Container>
      <Header />
      <ReturnHome>
        <Link to="/home">
          <Icon>{/* {BackIcon}*/}</Icon>Voltar para Home
        </Link>
      </ReturnHome>
      <ChatHeader>
        <h2>Usuário</h2>
        <button>agendar</button>
      </ChatHeader>
      <ChatBox>caixa de mensagens</ChatBox>
      <MessageInput>
        <input type="text" />
        <button>enviar</button>
      </MessageInput>
    </Container>
  )
}

export default Chat
