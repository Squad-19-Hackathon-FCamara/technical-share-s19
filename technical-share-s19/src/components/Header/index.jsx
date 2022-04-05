import React from 'react'
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
        <ChatButton>Chat</ChatButton>
      </HeaderButtons>
    </HeaderContainer>
  )
}

export default Header
