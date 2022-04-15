import styled from 'styled-components'

export const ReturnHome = styled.div`
  margin: 2rem 0.5rem;

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

export const ChatListHeader = styled.div`
  padding: 15px;
  border-bottom: 2px solid #5251A2;

  h2 {
    font-weight: 500;
  }
`

export const ChatListContainer = styled.aside`
  border-right: 2px solid #5251A2;
  box-shadow: 1px 0px 7px rgb(0 0 0 / 15%);
  flex: 0 0 22em;
  overflow: hidden;

  @media(max-width: 800px) {
    flex: 1;
    display: ${props => props.chatSelected ? 'none' : 'block'};
  }
`

export const StartedChats = styled.div`
  display: flex;
  flex-direction: column;
`