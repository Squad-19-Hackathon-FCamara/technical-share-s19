import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/authContext"
import ChatItem from "../ChatItem"
import Header from "../Header"
import { ChatListHeader, Container, Icon, ReturnHome, StartedChats } from "./styles"

const ChatList = (props) => {
const {user} = useContext(AuthContext)
const {conversas} = user
// const [listedUsers, setListedUsers] = useState(null)
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
        {conversas.map(conversa => {
          return (
            <ChatItem  username={conversa.name} id={conversa.id}/> 
          )
        })}
      </StartedChats>
    </Container>)
}

export default ChatList