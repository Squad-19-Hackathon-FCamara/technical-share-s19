import styled from 'styled-components'

const HeaderContent = styled.header`
  display: none;
  
  @media (min-width: 600px) {
    padding: 20px;
    box-shadow: 1px 3px 3px rgb(45 45 45 / 31%);
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
  }
`

const HeaderContainer = styled.div`
`

const HeaderButtons = styled.div``

const ChatButton = styled.button``

const ProfileButton = styled.button``

export {
  HeaderContent,
  HeaderContainer,
  HeaderButtons,
  ChatButton,
  ProfileButton
}
