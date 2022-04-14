import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1 1 auto;
`

export const ReturnHome = styled.span`
  display: flex;
  /* height: 1.875rem; */
  align-items: center;
  margin: 2.188rem 0 2.813rem 0;
`

export const Icon = styled.i`
  height: 2rem;
`

export const ChatHeader = styled.div`
  padding: 30px;
  border-bottom: 2px solid rgb(130 121 121 / 23%);

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