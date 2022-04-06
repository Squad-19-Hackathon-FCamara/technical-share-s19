import React from 'react'
import { Container, Username, UserPhoto, UserTags } from './styles'

const Card = props => {
  // const renderUserTags = props.tags.map(tag => <Tag /* inserir prop */ />)

  return (
    <Container>
      <UserPhoto src={props.photo} />
      <Username>{props.username}</Username>
      {/* <UserTags>{renderUserTags}</UserTags> */}
    </Container>
  )
}

export default Card
