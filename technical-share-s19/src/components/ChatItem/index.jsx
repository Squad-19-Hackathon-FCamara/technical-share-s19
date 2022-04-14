
import { Link } from 'react-router-dom'
import { Container } from './styles'

const ChatItem = props => {
  return (
    <Container>
      <Link to={`/chat/${props.id}`}>
        {props.username}
      </Link>
    </Container>
  )
}

export default ChatItem