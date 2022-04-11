import { useContext } from 'react'
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
  const { user } = useContext(AuthContext)

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
        {user?.chats.map(chat => {
          return (
            <div key={chat.id}>
              <ChatItem username={chat.name} id={chat.id} />
            </div>
          )
        })}
      </StartedChats>
    </Container>
  )
}

export default ChatList
