import styled from 'styled-components'

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
  background-color: #e5e5e5;
`

const Header = styled.header`
  display: flex;
  padding: 2.813rem 0;
  justify-content: space-between;
`
const HeaderTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: 700;
`

const HeaderButtons = styled.div``

const Hero = styled.div``

const HeroTitle = styled.h2`
  font-size: 1.563rem;
  font-weight: 600;
`

const HeroSubtitle = styled.h3`
  font-size: 0.938rem;
  font-weight: 400;
  margin: 0.625rem 0 2.188rem;
`

const Suggestions = styled.div``

const SuggestionsTitle = styled.h3`
  font-size: 1rem;
`

const SuggestionsCarousel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.938rem;
`

export {
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
}
