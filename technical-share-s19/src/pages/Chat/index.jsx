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

const Chat = () => {
  const socket = useRef()
  const { user } = useContext(AuthContext)
  const { mentorId } = useParams()
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [currentChat, setCurrentChat] = useState(undefined)
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const scrollRef = useRef()

  useEffect(() => {
    socket.current = io('http://localhost:3003')
    socket.current.emit('add-user', user._id)
  }, [])

  useEffect(() => {
    async function getMessages() {
      const response = await axios.post(
        'http://localhost:3003/message/getmessages',
        {
          from: user._id,
          to: mentorId
        }
      )
      setMessages(response.data)
    }
    getMessages()
  }, [])

  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-receive', message => {
        setArrivalMessage({ fromSelf: false, message: message })
        console.log(message)
      })
    }
  }, [])

  const handleSendMessage = e => {
    e.preventDefault()
    submitMessage(message)
    setMessage('')
  }

  const submitMessage = async message => {
    socket.current.emit('send-msg', {
      from: user._id,
      to: mentorId,
      message: message
    })

    await axios.post('http://localhost:3003/message/addmessage', {
      from: user._id,
      to: mentorId,
      message: message
    })

    const msgs = [...messages]
    msgs.push({ fromSelf: true, message: message })
    setMessages(msgs)
  }

  useEffect(() => {
    arrivalMessage &&
      setMessages(prevMessages => [...prevMessages, arrivalMessage])
  }, [arrivalMessage])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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
            <div ref={scrollRef} key={message._id}>
              {' '}
              {/* verificar se message fromself = true para definir posição da msg na tela */}
              <p>{message.message}</p>
            </div>
          )
        })}
      </ChatBox>
      <MessageForm onSubmit={handleSendMessage}>
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          type="text"
        />
        <button>enviar</button>
      </MessageForm>
    </Container>
  )
}

export default Chat
