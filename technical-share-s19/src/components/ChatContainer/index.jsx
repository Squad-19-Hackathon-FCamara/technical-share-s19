import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import AuthContext from '../../context/authContext'
import { ChatBox, ChatHeader, Container, MessageForm } from './styles'

const ChatContainer = props => {
  const { user, users } = useContext(AuthContext)
  const [currentChatName, setCurrentChatName] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const scrollRef = useRef()
  const { mentorId } = useParams()
  const socket = useRef()

  useEffect(() => {
    socket.current = io('http://localhost:3003')
    socket.current.emit('add-user', props.user._id)
  }, [])

  useEffect(() => {
    const activeChat = users.find(user => user.id === mentorId)
    setCurrentChatName(activeChat.name)

    async function getMessages() {
      const response = await axios.post(
        'http://localhost:3003/message/getmessages',
        {
          from: props.user._id,
          to: mentorId
        }
      )
      setMessages(response.data)
    }
    getMessages()
  }, [mentorId])

  const handleSendMessage = e => {
    e.preventDefault()
    submitMessage(message)
    setMessage('')
    createChat()
  }

  const submitMessage = async message => {
    socket.current.emit('send-msg', {
      from: props.user._id,
      to: mentorId,
      message: message
    })

    await axios.post('http://localhost:3003/message/addmessage', {
      from: props.user._id,
      to: mentorId,
      message: message
    })

    const msgs = [...messages]
    msgs.push({ fromSelf: true, message: message })
    setMessages(msgs)
  }

  const createChat = async () => {
    try {
      const response = await axios.post('http://localhost:3003/chat/create', {
        from: props.user._id,
        to: mentorId
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-receive', msg => {
        setArrivalMessage({ fromSelf: false, message: msg })
      })
    }
  }, [])

  useEffect(() => {
    arrivalMessage && setMessages(prev => [...prev, arrivalMessage])
  }, [arrivalMessage])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <Container>
      <ChatHeader>
        <h2>{currentChatName}</h2>
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

export default ChatContainer
