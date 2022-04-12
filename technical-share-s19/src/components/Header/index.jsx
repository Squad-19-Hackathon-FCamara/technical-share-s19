import React from 'react'
import { Link } from 'react-router-dom'
import { OrangeIcon } from '../../assets/icons'
import {
  HeaderContent,
  ChatButton,
  HeaderButtons,
  HeaderContainer,
  ProfileButton
} from './styles'

const Header = (props) => {
  return (
    <HeaderContent>
      <HeaderContainer>
        {OrangeIcon}
      </HeaderContainer>

      {
        props.buttons &&
        <HeaderButtons>
          <ProfileButton>Perfil</ProfileButton>
          <Link to="/chat">
            <ChatButton>Chat</ChatButton>
          </Link>
        </HeaderButtons>
      }
    </HeaderContent>
  )
}

export default Header
