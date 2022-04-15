import React from 'react'
import { Link } from 'react-router-dom'
import { ChatIcon } from '../../assets/icons'
import Tag from '../Tag'
import {
  Container,
  UserRole,
  UserInfo,
  Username,
  UserPhoto,
  UserTags,
  ChatButton
} from './styles'

const Card = props => {
  // const tagsMock = ["html", "css", "javascript", "react", "node"]

  const renderUserTags = props.tags.map(tag => (
    <Tag key={Math.random()} tag={tag} />
  ))

  return (
    <Container>
      <UserPhoto src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
      {/* <UserPhoto src={props.photo} /> FOTO DINÂMICA CADASTRADA PELA PESSOA */}
      <UserInfo>
        <Username>{props.username}</Username>
        <UserRole> {props.role}</UserRole>
        <UserTags>{renderUserTags}</UserTags>
      </UserInfo>
      <Link to={'/chat/' + props.id}>
        <ChatButton>
          {ChatIcon}
        </ChatButton>
      </Link>
    </Container>
  )
}

export default Card