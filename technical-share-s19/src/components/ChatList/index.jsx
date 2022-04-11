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
        {user?.conversas.map(conversa => {
          return (
            <div>
              <ChatItem username={conversa.name} id={conversa.id} />
            </div>
          )
        })}
      </StartedChats>
    </Container>
  )
}

export default ChatList
