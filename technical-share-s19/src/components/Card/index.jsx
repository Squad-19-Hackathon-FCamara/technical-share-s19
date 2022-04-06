import React from 'react'
import { Container, Username, UserPhoto, UserTags } from './styles'

const Card = props => {
  // const renderUserTags = props.tags.map(tag => <Tag /* inserir prop */ />)

  return (
    <Container>
      <UserPhoto src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscsGIFMi-7cAr-85mUBpImUef5OFhPX2BZw&usqp=CAU" />
      {/* <UserPhoto src={props.photo} /> FOTO DINÂMICA CADASTRADA PELA PESSOA */}
      <Username>{props.username}</Username>
      {/* <UserTags>{renderUserTags}</UserTags> */}
    </Container>
  )
}

export default Card
