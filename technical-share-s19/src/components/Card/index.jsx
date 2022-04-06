import React from 'react'
import Tag from '../Tag'
import {
  Container,
  UserCargo,
  UserInfo,
  Username,
  UserPhoto,
  UserProfissao,
  UserTags
} from './styles'

const Card = props => {
  // const tagsMock = ["html", "css", "javascript", "react", "node"]

  const renderUserTags = props.tags.map(tag => <Tag /* key */ tag={tag} />)

  return (
    <Container>
      <UserPhoto src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscsGIFMi-7cAr-85mUBpImUef5OFhPX2BZw&usqp=CAU" />
      {/* <UserPhoto src={props.photo} /> FOTO DINÂMICA CADASTRADA PELA PESSOA */}
      <UserInfo>
        <Username>{props.username}</Username>
        <div>
          <UserProfissao>{props.profissao}</UserProfissao>
          <UserCargo> {props.cargo}</UserCargo>
        </div>
        <UserTags>{renderUserTags}</UserTags>
      </UserInfo>
    </Container>
  )
}

export default Card
