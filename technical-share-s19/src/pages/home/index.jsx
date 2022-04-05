import React from 'react'
import {
  Layout,
  Header,
  HeaderTitle,
  HeaderButtons,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Suggestions,
  SuggestionsTitle,
  SuggestionsCarousel
} from './styles'

const Home = () => {
  return (
    <Layout>
      <Header>
        {/*logo?*/}
        <HeaderTitle>Technical Share</HeaderTitle>
        <HeaderButtons>Chat</HeaderButtons>
      </Header>
      <Hero>
        <HeroTitle>A maior comunidade de tech skills do Brasil</HeroTitle>
        <HeroSubtitle>
          Aprenda e compartilhe, troque experiências e decole sua carreira.
        </HeroSubtitle>
      </Hero>
      <Suggestions>
        <SuggestionsTitle>Sugestões de mentores para você:</SuggestionsTitle>
        <SuggestionsCarousel>{/* componentes Cards */}</SuggestionsCarousel>
      </Suggestions>
      {/*
      <PesquisaMentores>
        <texto></texto>
        <CampoDePesquisa></CampoDePesquisa>
        <BotaoPesquisa></BotaoPesquisa>
      </PesquisaMentores> */}
    </Layout>
  )
}

export default Home
