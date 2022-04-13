import styled from 'styled-components'

export const HeaderContent = styled.header`
  display: ${props => props.displayMobile};
  padding: 20px;
  justify-content: space-between;
  position: absolute;
  width: 100%;
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

export const ChatButton = styled.button`
  border: none;
  font-weight: 400;
  background-color: unset;
  font-size: 1.25rem;
  line-height: 30px;

  &:hover, &:focus, &:active {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ProfileButton = styled.button`
  border: none;
  color: #36357E;
  font-weight: 700;
  background-color: unset;
  font-size: 1.25rem;
  line-height: 30px;

  &:hover, &:focus, &:active {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const LogOutButton = styled.button`
  border: none;
  font-weight: 400;
  background-color: unset;
  font-size: 1.25rem;
  line-height: 30px;

  &:hover, &:focus, &:active {
    cursor: pointer;
    text-decoration: underline;
  }
`