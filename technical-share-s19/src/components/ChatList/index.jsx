import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BackIcon } from '../../assets/icons'
import AuthContext from '../../context/authContext'
import ChatItem from '../ChatItem'
import {
  ChatListContainer,
  ChatListHeader,
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
    <ChatListContainer>
      <ReturnHome>
        <Link to="/">
          <Icon>{BackIcon}</Icon><span>Voltar para Home</span>
        </Link>
      </ReturnHome>
      <ChatListHeader>
        <h2>Todas as mensagens</h2>
      </ChatListHeader>
      <StartedChats>
        {chats?.map(chat => {
          if (chat.id !== user._id) {
            return <ChatItem key={chat.id} username={chat.title} id={chat.id} />
          }
        })}
      </StartedChats>
    </ChatListContainer>
  )
}

export default ChatList