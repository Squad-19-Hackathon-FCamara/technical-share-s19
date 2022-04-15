import styled from 'styled-components'

export const HeaderContent = styled.header`
  display: ${props => props.displayMobile};
  padding: 20px;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
  
  @media (min-width: 600px) {
    display: flex;
    box-shadow: 1px 3px 3px rgb(45 45 45 / 31%);
  }
`

export const HeaderContainer = styled.div`
`

export const HeaderButtons = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-right: 15px;
  }
`

export const HeaderButtonMobile = styled.span`
  @media (min-width: 600px) {
    display: none;
  }
`

export const ChatButton = styled.span`
  font-weight: ${props => props.selectedPage === 'chat' ? '700' : '400'};
  color: ${props => props.selectedPage === 'chat' ? '#36357E' : '#000'};
  background-color: unset;
  font-size: 1.25rem;
  line-height: 30px;
`

export const ProfileButton = styled.span`
  font-weight: ${props => props.selectedPage === 'home' ? '700' : '400'};
  color: ${props => props.selectedPage === 'home' ? '#36357E' : '#000'};
  background-color: unset;
  font-size: 1.25rem;
  line-height: 30px;
`

export const LogOutButton = styled.button`
  font-weight: 400;
  background-color: unset;
  border: none;
  font-size: 1.25rem;
  line-height: 30px;

  &:hover, &:focus, &:active {
    cursor: pointer;
    text-decoration: underline;
  }
`