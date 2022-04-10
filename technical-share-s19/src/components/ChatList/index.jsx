import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../Header"
import { ChatListHeader, Container, Icon, ReturnHome, StartedChats } from "./styles"

const ChatList = (props) => {
  useEffect(() => {
    // const data = await axios.get();
  }, []);

  return (
    <Container>
      <Header />
      <ReturnHome>
        <Link to="/home">
          <Icon>{/* {BackIcon}*/}</Icon>Voltar para Home
        </Link>
      </ReturnHome>
      <ChatListHeader>
        <h2>Lista de Conversas</h2>
      </ChatListHeader>
      <StartedChats>
        {/* {ChatItem?.map(message => {
          return (
            <div>
            </div>
          )
        })} */}
      </StartedChats>
    </Container>)
}

export default ChatList