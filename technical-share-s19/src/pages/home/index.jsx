import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import {
  Layout,
  Hero,
  HeroTitle,
  HeroSubtitle,
  CardsSection,
  SectionTitle,
  CardsCarousel,
  SearchMentor
} from './styles'

const Home = () => {
  const [users, setUsers] = useState([])
  const [resultList, setResultList] = useState([])
  const [resultListVisible, setResultListVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('http://localhost:3003/users/')
      if (!response.ok)
        throw new Error('Erro ao consultar usuários cadastrados!')
      const data = await response.json()
      const usersList = data.users

      let loadedUsers = []

      for (const key in usersList) {
        loadedUsers.push({
          id: key,
          name: usersList[key].name,
          email: usersList[key].email,
          role: usersList[key].role,
          tags: usersList[key].tags
        })
      }
      setUsers(loadedUsers)
    }

    getUsers().catch(error => {
      setError(error.message)
    })
  }, [])

  function filterUsers(e) {
    e.preventDefault()
    const searchResult = users.filter(
      user =>
        user.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        user.role.toLowerCase().includes(inputValue.toLowerCase())
      // user.tags.toLowerCase().includes(inputValue.toLowerCase())
    )
    setResultListVisible(true)
    setResultList(searchResult)
  }

  const userList = users.map(user => (
    <Card
      key={user.id}
      username={user.name}
      tags={user.tags}
      role={user.role}
    />
  ))

  const searchResults = resultList.map(user => (
    <Card
      key={user.id}
      username={user.name}
      tags={user.tags}
      role={user.role}
    />
  ))

  return (
    <Layout>
      <Header />
      <Hero>
        <HeroTitle>A maior comunidade de tech skills do Brasil</HeroTitle>
        <HeroSubtitle>
          Aprenda e compartilhe, troque experiências e decole sua carreira.
        </HeroSubtitle>
      </Hero>
      <SearchMentor>
        <SectionTitle>Pesquise por mentores:</SectionTitle>
        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          filterUsers={filterUsers}
        />
      </SearchMentor>

      {resultListVisible && (
        <CardsSection>
          <SectionTitle>Resultados da busca:</SectionTitle>
          <CardsCarousel>
            {resultList.length ? (
              searchResults
            ) : (
              <p>Nenhum resultado encontrado.</p>
            )}
          </CardsCarousel>
        </CardsSection>
      )}

      <CardsSection>
        <SectionTitle>Sugestões de mentores para você:</SectionTitle>
        <CardsCarousel>{!error ? userList : error}</CardsCarousel>
      </CardsSection>
    </Layout>
  )
}

export default Home
