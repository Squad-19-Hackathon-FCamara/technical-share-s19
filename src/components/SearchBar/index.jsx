import React from 'react'
import { SearchIcon } from '../../assets/icons'
import { Button, Form, Input } from './styles'

const SearchBar = props => {
  return (
    <Form onSubmit={e => props.filterUsers(e)}>
      <Input
        id="busca"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
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
