import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import AuthContext from '../../context/authContext'
import { ReturnHome, Icon, ChatPageContainer } from './styles'
import ChatContainer from '../../components/ChatContainer'
import ChatList from '../../components/ChatList'

const Chat = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Header buttons selectedPage={'chat'} />
      <ChatPageContainer>
        <ChatList user={user} />
        <ChatContainer user={user} />
      </ChatPageContainer>
    </>
  )
}

export default Chat