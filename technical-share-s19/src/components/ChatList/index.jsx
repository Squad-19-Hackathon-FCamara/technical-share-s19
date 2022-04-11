import { Link } from 'react-router-dom'
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
  const { user } = props

  return (
    <Container>
      <Header />
      <ReturnHome>
        <Link to="/home">
          <Icon>{/* {BackIcon}*/}</Icon>Voltar para Home
        </Link>
      </ReturnHome>
      <ChatListHeader>
        <h2>Usuário</h2>
        <button>agendar</button>
      </ChatListHeader>
      <StartedChats>
        {user?.chats.map(chat => {
          return (
            <div>
              <ChatItem username={chat.name} id={chat.id} />
            </div>
          )
        })}
      </StartedChats>
    </Container>
  )
}

export default ChatList
