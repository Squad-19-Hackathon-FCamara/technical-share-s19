import React from 'react'
import { Link } from 'react-router-dom'
import { BackIcon } from '../../assets/icons'
import Header from '../../components/Header'
import {
  ChatHeader,
  Container,
  ReturnHome,
  Icon,
  ChatBox,
  MessageInput
} from './styles'

const Chat = () => {
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
