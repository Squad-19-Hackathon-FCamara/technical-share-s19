import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BackIcon } from '../../assets/icons'
import Header from '../../components/Header'
import AuthContext from '../../context/authContext'
import axios from 'axios'
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
  const [message, setMessage] = useState('')
  const [currentChat, setCurrentChat] = useState(undefined)
  const { mentorId } = useParams()

  let chatMembers = { senderId: user._id, receiverId: mentorId }

  // useEffect(() => {
  //   async function getChatFromDatabase() {
  //     const getChatByMentorId = await fetch(
  //       'http://localhost:3003/chat/' + mentorId
  //     )
  //     const response = await getChatByMentorId
  //     const existingChat = await response.json()
  //     console.log(existingChat)

  //     if (!existingChat.length) {
  //       const createNewChat = await fetch('http://localhost:3003/chat/', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(chatMembers)
  //       })
  //       const response = await createNewChat
  //       console.log(response)
  //     }
  //   }
  //   getChatFromDatabase()
  // }, [])

  useEffect(() => {
    async function getMessages() {
      const response = await axios.post(
        'http://localhost:3003/message/getmessages',
        {
          from: user._id,
          to: mentorId
        }
      )
      console.log(response.data)
      setMessages(response.data)
    }
    getMessages()
  }, [])

  const submitMessage = async message => {
    await axios.post('http://localhost:3003/message/addmessage', {
      from: user._id,
      to: mentorId,
      message: message
    })
  }
  const handleSendMessage = e => {
    e.preventDefault()
    submitMessage(message)
  }

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
      <ChatBox>
        {messages?.map(message => {
          return (
            <div>
              <p>{message.message}</p>
            </div>
          )
        })}
      </ChatBox>
      <MessageInput>
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          type="text"
        />
        <button onClick={handleSendMessage}>enviar</button>
      </MessageInput>
    </Container>
  )
}

export default Chat
