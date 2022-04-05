import React from 'react'
import { SearchIcon } from '../../assets/icons'
import { Button, Form, Input } from './styles'

const SearchBar = () => {
  return (
    <Form>
      <Input placeholder="Digite o nome, cargo, skill ou seguimento" />
      <Button>{SearchIcon}</Button>
    </Form>
  )
}

export default SearchBar
