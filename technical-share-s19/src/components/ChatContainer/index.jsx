import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { ChatBox, ChatHeader, Container, MessageForm } from "./styles"

const ChatContainer = (props) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const { mentorId } = useParams()
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const scrollRef = useRef()

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    if (props.socket.current) {
      props.socket.current.on('msg-receive', message => {
        setArrivalMessage({ fromSelf: false, message: message })
        console.log(message)
      })
    }
  }, [])

  useEffect(() => {
    arrivalMessage &&
      setMessages(prevMessages => [...prevMessages, arrivalMessage])
  }, [arrivalMessage])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const submitMessage = async message => {
    props.socket.current.emit('send-msg', {
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

  const handleSendMessage = e => {
    e.preventDefault()
    submitMessage(message)
    setMessage('')
  }

  return (
    <Container>
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

export default ChatContainer