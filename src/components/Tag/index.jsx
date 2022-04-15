import React from 'react'
import { Container, TagText } from './styles'

const Tag = props => {
  return (
    <Container>
      <TagText>{props.tag}</TagText>
    </Container>
  )
}

export default Tag