import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1 1 auto;
  
  @media(max-width: 800px) {
    display: ${props => props.chatSelected ? "block" : "none"};
  }
`

export const ReturnHome = styled.div`
  margin: 2rem 0.5rem 1rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: fit-content;
    gap: 5px;
  }

  span {
    font-size: 1.2rem;
  }
`

export const ChatHeader = styled.div`
  padding: 30px;
  border-bottom: 2px solid rgb(130 121 121 / 23%);

  @media(max-width: 800px) {
    padding: 15px;
  }

  h2 {
    font-weight: 400;
    font-size: 1.25rem;
  }

  p {
    text-align: center;
  }
`

export const ChatBox = styled.div`
  padding: 30px;
  height: 73.8vh;
  overflow-y: auto;

  @media(max-width: 800px) {
    height: 67.8vh;
    padding-bottom: 40px;
  }
`

export const ChatBoxMessage = styled.p`
  padding: 15px;
  border: 1px solid;
  border-color: ${props => props.fromSelf ? '#A8A8D0' : '#FE662E'};
  margin-bottom: 17.5px;
  border-radius: ${props => props.fromSelf ? '10px 10px 0px 10px' : '10px 10px 10px 0px'};
  max-width: 36.2em;
  margin-left: ${props => props.fromSelf ? 'auto' : 'unset'};
  margin-right: ${props => props.fromSelf ? 'unset' : 'auto'};
  width: fit-content;
  line-height: 1.4;
`

export const ChatBoxInformation = styled.div`
  display: flex;
  justify-content: center;
`

export const MessageForm = styled.form`
  background-color: #36357E;
  padding: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.25);
`

export const InputMessage = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  color: #fff;

  &::placeholder {
    color: #fff;
  }

  &:hover, &:focus, &:active {
    outline: none;
  }
`

export const SubmitMessage = styled.button`
  border: none;
  background-color: unset;
  
  svg {
    transition: 0.3s;
  }

  &:hover, &:focus, &:active {
    cursor: pointer;

    svg {
      transform: scale(1.3)
    }
  }
`