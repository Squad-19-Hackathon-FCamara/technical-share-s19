import React, { useState } from 'react'
import { SearchIcon } from '../../assets/icons'
import { Button, Form, Input } from './styles'

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState("");

  function filterUsers() {
      const usersList = props.users

      const searchResult = usersList.filter(user => user.name.includes(inputValue))
      
      props.results(searchResult);
  }

  return (
    <Form>
      <Input id="busca" name="q" value={inputValue} onChange={setInputValue} placeholder="Digite o nome, cargo, skill ou segmento" minLength={2} type="search" required />
      <Button type='submit' onSubmit={filterUsers}>{SearchIcon}</Button>
    </Form>
  )
}

export default SearchBar
