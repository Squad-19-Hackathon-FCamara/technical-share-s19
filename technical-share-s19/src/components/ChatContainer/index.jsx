import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import AuthContext from '../../context/authContext'
import { ChatBox, ChatHeader, Container, MessageForm } from './styles'

const ChatContainer = props => {
  const { users } = useContext(AuthContext)
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
    setCurrentChatName(activeChat?.name)

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
      console.log('chat já existe :)')
    }
  }

  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-receive', msg => {
        setArrivalMessage({ fromSelf: false, message: msg, _id: msg._id })
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
        <h2>
          {mentorId ? (
            currentChatName
          ) : (
            <p>
              Bem vindo aos chats! Escolha uma conversa e comece a tirar suas
              dúvidas!
            </p>
          )}
        </h2>

        <button>agendar</button>
      </ChatHeader>
      <ChatBox>
        {mentorId ? (
          messages?.map(message => {
            return (
              // {/* verificar se message fromself = true para definir posição da msg na tela */}
              <p key={message._id} ref={scrollRef}>
                {message.message}
              </p>
            )
          })
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            Selecione uma conversa para iniciar
          </div>
        )}
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
