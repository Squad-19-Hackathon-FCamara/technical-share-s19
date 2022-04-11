import React from 'react'
import { Link } from 'react-router-dom'
import {
  ChatButton,
  HeaderButtons,
  HeaderContainer,
  HeaderTitle,
  ProfileButton
} from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Technical Share</HeaderTitle>
      <HeaderButtons>
        <ProfileButton>Perfil</ProfileButton>
        <Link to="/chat">
        <ChatButton>Chat</ChatButton>
        </Link>
      </HeaderButtons>
    </HeaderContainer>
  )
}

export default Header
