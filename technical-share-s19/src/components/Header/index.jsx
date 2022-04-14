import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChatIcon, OrangeIcon } from '../../assets/icons'
import AuthContext from '../../context/authContext'
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
  const { userLogout } = useContext(AuthContext)

  return (
    <HeaderContent displayMobile={props.buttons ? "flex" : "none"}>
      <HeaderContainer>
        {OrangeIcon}
      </HeaderContainer>

      {
        props.buttons &&
        <div>
          <HeaderButtons>
            <Link to="/">
              <ProfileButton selectedPage={props.selectedPage}>
                Encontrar mentores
              </ProfileButton>
            </Link>
            <Link to="/chat">
              <ChatButton selectedPage={props.selectedPage}>Mensagens</ChatButton>
            </Link>
            <LogOutButton onClick={userLogout}>Sair</LogOutButton>
          </HeaderButtons>

          <Link to={'/chat'}>
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
