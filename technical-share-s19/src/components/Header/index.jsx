import React from 'react'
import { Link } from 'react-router-dom'
import { ChatIcon, OrangeIcon } from '../../assets/icons'
import {
  HeaderContent,
  ChatButton,
  HeaderButtons,
  HeaderContainer,
  ProfileButton,
  LogOutButton,
  HeaderButtonMobile
} from './styles'

const Header = (props) => {
  return (
    <HeaderContent displayMobile={props.buttons ? "flex" : "none"}>
      <HeaderContainer>
        {OrangeIcon}
      </HeaderContainer>

      {
        props.buttons &&
        <div>
          <HeaderButtons>
            <ProfileButton>Encontrar mentores</ProfileButton>
            <Link to="/chat">
              <ChatButton>Mensagens</ChatButton>
            </Link>
            <LogOutButton>Sair</LogOutButton>
          </HeaderButtons>

          <Link to={'/chatlist'}>
            <HeaderButtonMobile>
              {ChatIcon}
            </HeaderButtonMobile>
          </Link>
        </div>
      }
    </HeaderContent>
  )
}

export default Header
