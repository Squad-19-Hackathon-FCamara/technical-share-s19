import { Link } from 'react-router-dom'
import { Container, Username } from './styles'

const ChatItem = props => {
  return (
    <Container>
      <Link>
        <profileIcon>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
        </profileIcon>
        <Username>{props.username}</Username>
      </Link>
    </Container>
  )
}

export default ChatItem
