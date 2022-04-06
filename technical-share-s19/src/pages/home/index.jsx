import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import {
  Layout,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Suggestions,
  SectionTitle,
  SuggestionsCarousel,
  SearchMentor,
  SkillSection,
  SkillTree
} from './styles'

const Home = () => {
  const [users, setUsers] = useState([])
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
          bio: usersList[key].bio,
          technologies: usersList[key].technologies,
          job: usersList[key].job,
          experience: usersList[key].experience
        })
      }
      setUsers(loadedUsers)
    }

    getUsers().catch(error => {
      setError(error.message)
    })
  }, [])

  const userList = users.map(user => (
    <Card key={user.id} username={user.name} />
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
        <SearchBar />
      </SearchMentor>

      {/* áreas de interesse */}
      <SkillSection>
        <SectionTitle>Ou pesquise por skills de interesse:</SectionTitle>
        <SkillTree></SkillTree>
      </SkillSection>

      <Suggestions>
        <SectionTitle>Sugestões de mentores para você:</SectionTitle>
        <SuggestionsCarousel>{userList}</SuggestionsCarousel>
      </Suggestions>
    </Layout>
  )
}

export default Home
