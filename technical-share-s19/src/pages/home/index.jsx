import React, { useContext, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import AuthContext from '../../context/authContext'
import Orange from '../../assets/img/OrangeBefore.png'
import Purple from '../../assets/img/PurpleAfter.png'
import Mentores from '../../assets/img/Mentores.png'
import Conhecimento from '../../assets/img/Conhecimento.png'
import Cresca from '../../assets/img/Cresca.png'

import {
  Hero,
  HeroTitle,
  CardsSection,
  SectionTitle,
  CardsCarousel,
  SearchMentor,
  HeroTitleContainer,
  HeroFeatures,
  HeroFeaturesItem,
  SectionMentorTitle,
  LogOutMobile
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
    <>
      <Header buttons selectedPage={'home'} />
      <Hero backgroundBefore={Orange} backgroundAfter={Purple}>
        <HeroTitleContainer>
          <HeroTitle>A maior comunidade de tech skills do Brasil</HeroTitle>
          <HeroFeatures>
            <HeroFeaturesItem>
              <img src={Mentores} alt="Encontre mentores" />
              <div>
                <span>Encontre</span>
                <span>mentores</span>
              </div>
            </HeroFeaturesItem>
            <HeroFeaturesItem>
              <img src={Conhecimento} alt="Compartilhe conhecimento" />
              <div>
                <span>Compartilhe</span>
                <span>conhecimento</span>
              </div>
            </HeroFeaturesItem>
            <HeroFeaturesItem>
              <img src={Cresca} alt="Cresça junto" />
              <div>
                <span>Cresça</span>
                <span>junto</span>
              </div>
            </HeroFeaturesItem>
          </HeroFeatures>
        </HeroTitleContainer>
      </Hero>
      <SearchMentor>
        <SectionTitle>Pesquise por mentores</SectionTitle>
        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          filterUsers={filterUsers}
        />
      </SearchMentor>

      {resultListVisible && (
        <CardsSection>
          <SectionMentorTitle>Resultados da busca:</SectionMentorTitle>
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
        <SectionMentorTitle>
          Sugestões de mentores para você:
        </SectionMentorTitle>
        <CardsCarousel>
          {!errorFetchUsers ? userList : errorFetchUsers}
        </CardsCarousel>
      </CardsSection>

      <LogOutMobile>
        <button onClick={userLogout}>Sair</button>
      </LogOutMobile>
    </>
  )
}

export default Home
