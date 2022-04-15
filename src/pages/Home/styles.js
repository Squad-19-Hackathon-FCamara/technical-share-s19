import styled from 'styled-components'

export const Hero = styled.div`
  text-align: center;
  background-image: url(${props => props.backgroundBefore}), url(${props => props.backgroundAfter});
  background-repeat: no-repeat;
  background-position-y: -43px, 60px;
  background-position-x: -20px, right;
  padding-bottom: 80px;
  margin-top: 80px;
  padding-top: 60px;

  @media(max-width: 900px) {
    background-size: 113px, 100px;
  }

  @media(min-width: 900px) {
    background-position-y: -50px, 120px;
    background-position-x: left, right;
  }
`

export const HeroTitleContainer = styled.div`
  max-width: 926px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`

export const HeroTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #36357E;
  letter-spacing: 0.01em;
  text-align: left;

  @media(min-width: 600px) {
    text-align: center;
  }

  @media(min-width: 900px) {
    font-size: 3.75rem;
    line-height: 70px;
  }
`

export const HeroFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;

  @media (min-width: 900px) {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 40px;
  }
`

export const HeroFeaturesItem = styled.div`
  display: grid;
  grid-gap: 15px;
  justify-items: center;

  span {
    display: block;
    font-size: 0.75rem;
    line-height: 20px;
    
    @media(max-width: 900px) {
      font-weight: 600;
    }

    @media(min-width: 900px) {
      font-size: 1.875rem;
      line-height: 30px;
    }
  }
`

export const SectionTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 1.238rem;
  font-weight: 400;
  text-align: left;

  @media(min-width: 900px) {
    font-size: 3rem;
    color: #36357E;
    text-align: center;
  }
`

export const SectionMentorTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;

  @media(min-width: 900px) {
    font-size: 1.875rem;
  }
`

export const SearchMentor = styled.div`
  margin-bottom: 3.588rem;
  max-width: 717px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media(min-width: 900px) {
    margin-top: 60px;
  }
`

export const CardsSection = styled.div`
  margin-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
`

export const CardsCarousel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.938rem;
  overflow-x: auto;
  padding: 30px 15px;

  @media(min-width: 800px) {
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
    background-color: #888;
    }

    ::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    } 
  }
`

export const LogOutMobile = styled.div`
  text-align: center;
  padding-bottom: 30px;

  @media(min-width: 600px) {
    display: none;
  }

  button {
    background-color: unset;
    border: none;
    text-decoration: underline;
    color: #36357E;
    font-size: 1.075rem;
  }
`