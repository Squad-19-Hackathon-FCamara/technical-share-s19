import React from 'react'
import Tag from '../Tag'
import {
  Container,
  UserRole,
  UserInfo,
  Username,
  UserPhoto,
  UserTags
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
        <div>
          <UserRole> {props.role}</UserRole>
        </div>
        <UserTags>{renderUserTags}</UserTags>
      </UserInfo>
    </Container>
  )
}

export default Card
