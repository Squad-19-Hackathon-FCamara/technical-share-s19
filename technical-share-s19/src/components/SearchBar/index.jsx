import React, { useState } from 'react'
import { SearchIcon } from '../../assets/icons'
import { Button, Form, Input } from './styles'

const SearchBar = props => {
  const [inputValue, setInputValue] = useState('')

  function filterUsers(e) {
    e.preventDefault()
    const usersList = props.users
    const searchResult = usersList.filter(
      user =>
        user.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        user.cargo.toLowerCase().includes(inputValue.toLowerCase()) ||
        user.profissao.toLowerCase().includes(inputValue.toLowerCase())
      // user.tags.toLowerCase().includes(inputValue.toLowerCase())
    )
    props.results(searchResult)
  }

  return (
    <Form onSubmit={filterUsers}>
      <Input
        id="busca"
        name="q"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Digite o nome, cargo, skill ou segmento"
        minLength={2}
        type="search"
        required
      />
      <Button type="submit">{SearchIcon}</Button>
    </Form>
  )
}

export default SearchBar
