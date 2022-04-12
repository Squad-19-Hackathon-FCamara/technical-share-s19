import styled from 'styled-components'
import { baseBtnSubmit } from '../../assets/styles'

export const Container = styled.div`
  ${baseBtnSubmit}
  text-align: center;
  margin: 0;

  @media(min-width: 600px) {
    padding: 1rem;
  }

  :nth-child(2n) {
    border-color: #7474B4;
    background-color: #6263AB;
  }
`

export const TagText = styled.span`
  color: #000;
  font-size: 0.75rem;
  font-weight: 400;
`