import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { io } from 'socket.io-client'
import { BackIcon, SubmitMessageIcon } from '../../assets/icons'
import AuthContext from '../../context/authContext'
import { ChatBox, ChatBoxInformation, ChatBoxMessage, ChatHeader, Container, Icon, InputMessage, MessageForm, ReturnHome, SubmitMessage } from './styles'

const ChatContainer = props => {
  const { users } = useContext(AuthContext)
  const [currentChatName, setCurrentChatName] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const scrollRef = useRef()
  const socket = useRef()

  useEffect(() => {
    socket.current = io('http://localhost:3003')
    socket.current.emit('add-user', props.user._id)
  }, [])

  useEffect(() => {
    const activeChat = users.find(user => user.id === props.mentorId)
    setCurrentChatName(activeChat?.name)

    async function getMessages() {
      const response = await axios.post(
        'http://localhost:3003/message/getmessages',
        {
          from: props.user._id,
          to: props.mentorId
        }
      )
      setMessages(response.data)
    }
    getMessages()
  }, [props.mentorId])

  const handleSendMessage = e => {
    e.preventDefault()
    submitMessage(message)
    setMessage('')
    createChat()
  }

  const submitMessage = async message => {
    socket.current.emit('send-msg', {
      from: props.user._id,
      to: props.mentorId,
      message: message
    })

    await axios.post('http://localhost:3003/message/addmessage', {
      from: props.user._id,
      to: props.mentorId,
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
        to: props.mentorId
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
    <Container chatSelected={props.mentorId}>
      <ReturnHome>
        <Link to="/">
          <i>{BackIcon}</i><span>Voltar para Home</span>
        </Link>
      </ReturnHome>
      <ChatHeader>
        <h2>
          {props.mentorId ? (
            currentChatName
          ) : (
            <p>
              Bem vindo aos chats! Escolha uma conversa e comece a tirar suas
              dúvidas!
            </p>
          )}
        </h2>
      </ChatHeader>
      <ChatBox>
        {props.mentorId ? (
          messages?.map(message => {
            return (
              // {/* verificar se message fromself = true para definir posição da msg na tela */}
              <ChatBoxMessage key={message._id} ref={scrollRef} fromSelf={message.fromSelf}>
                {message.message}
              </ChatBoxMessage>
            )
          })
        ) : (
          <ChatBoxInformation>
            Selecione uma conversa ao lado esquerdo para iniciar
          </ChatBoxInformation>
        )}
      </ChatBox>
      {
        props.mentorId &&
        (
          <MessageForm onSubmit={handleSendMessage}>
            <InputMessage
              value={message}
              onChange={e => setMessage(e.target.value)}
              type="text"
              placeholder='O início de uma grande conversa..'
            />
            <SubmitMessage>{SubmitMessageIcon}</SubmitMessage>
          </MessageForm>
        )
      }
    </Container>
  )
}

export default ChatContainer