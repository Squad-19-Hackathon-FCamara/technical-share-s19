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
  const [error, setError] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('http://localhost:3003/userList/')
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
          cargo: usersList[key].cargo,
          profissao: usersList[key].profissao,
          tags: usersList[key].tags
        })
      }
      setUsers(loadedUsers)
    }

    getUsers().catch(error => {
      setError(error.message)
    })
  }, [])

  const userList = users.map(user => (
    <Card
      key={user.id}
      username={user.name}
      tags={user.tags}
      profissao={user.profissao}
      cargo={user.cargo}
    />
  ))

  function searchResultList(obj) {
    const teste = obj.map(item => (
      <Card
        key={item.id}
        username={item.name}
        tags={item.tags}
        profissao={item.profissao}
        cargo={item.cargo}
      />
    ))

    setResultList(teste);
  }

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
        <SearchBar users={users} results={searchResultList} />
      </SearchMentor>

      {/* áreas de interesse */}
      {/* <SkillSection>
        <SectionTitle>Ou pesquise por skills de interesse:</SectionTitle>
        <SkillTree></SkillTree>
      </SkillSection> */}

      <CardsSection>
        <SectionTitle>Resultados da busca:</SectionTitle>
        <CardsCarousel>{resultList}</CardsCarousel>
      </CardsSection>

      <CardsSection>
        <SectionTitle>Sugestões de mentores para você:</SectionTitle>
        <CardsCarousel>{userList}</CardsCarousel>
      </CardsSection>
    </Layout>
  )
}

export default Home
