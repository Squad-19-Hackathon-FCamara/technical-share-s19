import React, { useContext, useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import AuthContext from '../../context/authContext'
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
  const { user, users, errorFetchUsers, userLogout } = useContext(AuthContext)
  const [resultList, setResultList] = useState([])
  const [resultListVisible, setResultListVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')

  function filterUsers(e) {
    e.preventDefault()
    const searchResult = users.filter(
      user =>
        user.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        user.role.toLowerCase().includes(inputValue.toLowerCase()) ||
        user.tags.filter(item =>
          item.toLowerCase().includes(inputValue.toLowerCase())
        ).length > 0
    )

    setResultListVisible(true)
    setResultList(searchResult)
  }

  const userList = users.map(userSuggestion => {
    if (userSuggestion.id !== user._id) {
      return (
        <Card
          key={userSuggestion.id}
          id={userSuggestion.id}
          username={userSuggestion.name}
          tags={userSuggestion.tags}
          role={userSuggestion.role}
        />
      )
    }
  })

  const searchResults = resultList.map(userResult => {
    if (userResult.id !== user._id) {
      return (
        <Card
          key={userResult.id}
          id={userResult.id}
          username={userResult.name}
          tags={userResult.tags}
          role={userResult.role}
        />
      )
    }
  })

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
        <CardsCarousel>
          {!errorFetchUsers ? userList : errorFetchUsers}
        </CardsCarousel>
      </CardsSection>
      <button onClick={userLogout}>Sair</button>
    </Layout>
  )
}

export default Home
