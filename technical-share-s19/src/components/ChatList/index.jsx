import axios from 'axios'
import { useContext, useEffect } from 'react'
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
  // const [chats, setChats] = useState(null)

  // useEffect(() => {
  //   const getChatsByUserId = async () => {
  //     const response = await axios.get('http://localhost:3003/chat/getallchats')
  //     setChats(response.data)
  //   }
  // }, [])

  useEffect(() => {
    async function getChatsByLoggedUser() {
      await axios.post('http://localhost:3003/chat/getallchats', {
        from: user._id,
        to: user._id
      })
    }
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
        {/* {chats?.map(chat => {
          return (
            <div key={chat._id}>
              <ChatItem username={chat.name} id={chat.id} />
            </div>
          )
        })} */}
      </StartedChats>
    </Container>
  )
}

export default ChatList
