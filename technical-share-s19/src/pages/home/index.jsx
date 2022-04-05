import React from 'react'
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
        <SuggestionsCarousel>{/* componentes Cards */}</SuggestionsCarousel>
      </Suggestions>
    </Layout>
  )
}

export default Home
