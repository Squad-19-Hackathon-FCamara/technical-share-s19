import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/authContext'
import ChatItem from '../ChatItem'
import Header from '../Header'
import {
  ChatListHeader,
  Container,
  Icon,
  ReturnHome,
  StartedChats
} from './styles'

const ChatList = props => {
  const { user, users } = useContext(AuthContext)
  const [chats, setChats] = useState([])

  useEffect(() => {
    const getChatsByUserId = async () => {
      const response = await axios.post(
        'http://localhost:3003/chat/getallchats',
        {
          userId: user._id
        }
      )
      const fetchedChats = response.data

      const list = fetchedChats.map(chat => {
        let item = {}
        if (chat.from._id === user._id) {
          item = { title: chat.to.name, id: chat.to._id }
        } else {
          item = { title: chat.from.name, id: chat.from._id }
        }
        return item
      })
      setChats(list)
    }
    getChatsByUserId()
  }, [])

  return (
    <Container>
      <Header />
      <ReturnHome>
        <Link to="/home">
          <Icon>{/* {BackIcon}*/}</Icon>Voltar para Home
        </Link>
      </ReturnHome>
      <ChatListHeader>
        <h2>Mensagens</h2>
      </ChatListHeader>
      <StartedChats>
        {chats?.map(chat => {
          if (chat.id !== user._id) {
            return <ChatItem key={chat.id} username={chat.title} id={chat.id} />
          }
        })}
      </StartedChats>
    </Container>
  )
}

export default ChatList
