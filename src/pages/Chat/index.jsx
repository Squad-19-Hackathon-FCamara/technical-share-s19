import React, { useContext } from 'react'
import Header from '../../components/Header'
import AuthContext from '../../context/authContext'
import { ChatPageContainer } from './styles'
import ChatContainer from '../../components/ChatContainer'
import ChatList from '../../components/ChatList'
import { useParams } from 'react-router-dom'

const Chat = () => {
  const { user } = useContext(AuthContext)
  const { mentorId } = useParams()

  return (
    <>
      <Header buttons selectedPage={'chat'} />
      <ChatPageContainer>
        <ChatList user={user} mentorId={mentorId} />
        <ChatContainer user={user} mentorId={mentorId} />
      </ChatPageContainer>
    </>
  )
}

export default Chat