import styled from 'styled-components'
import { baseBtnSubmit, baseInputStyles } from '../../assets/styles'

const Form = styled.form`
  display: flex;
  border: none;
  border-radius: 15px;
  justify-content: flex-end;
  align-items: center;
`

const Input = styled.input`
  ${baseInputStyles}
  border-radius: 15px 0 0 15px;

  @media(max-width: 900px) {
    padding: 19px 15px;
  }

  @media(min-width: 900px) {
    padding: 23px;
  }
`

const Button = styled.button`
  ${baseBtnSubmit}
  border-radius: 0 15px 15px 0;
  border-color: #5251A2;
  border-left: 0;

  @media(max-width: 900px) {
    margin: 0;
    padding: 10px;
  }

  @media(min-width: 900px) {
    padding: 15px 30px;
  }
`

export { Form, Input, Button }
