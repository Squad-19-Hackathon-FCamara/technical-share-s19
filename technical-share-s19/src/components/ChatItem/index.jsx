
import { Link } from 'react-router-dom'
import { Container, ProfileIcon, Username } from './styles'

const ChatItem = props => {
  return (
    <Container>
      <Link to={`/chat/${props.id}`}>
        {/* <ProfileIcon>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
        </ProfileIcon> */}
        <Username>{props.username}</Username>

      </Link>
    </Container>
  )
}

export default ChatItem
