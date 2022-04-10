import Header from "../Header"
import { ChatListHeader, Container, ReturnHome, StartedChats } from "./styles"


const ChatList = () => {


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
            
         </StartedChats>
    </Container>)
}

export default ChatList