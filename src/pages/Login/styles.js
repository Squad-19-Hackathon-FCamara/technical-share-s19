import styled from 'styled-components'
import { baseBtnSubmit, baseForm, baseFormBtnSvg, baseFormContainer, baseInputStyles, FormHeader, FormHeaderMobile, InputContent, Label } from '../../assets/styles'

export const FormContainer = styled.div`
  ${baseFormContainer}
`

export const FormLogin = styled.form`
  ${baseForm}
`

export const FormLoginHeader = styled.h3`
  ${FormHeader}
`

export const FormLoginHeaderMobile = styled.span`
  ${FormHeaderMobile}
`

export const FormError = styled.p`
  ${baseFormBtnSvg}
`

export const InputContainer = styled.div`
  ${InputContent}
`

export const InputLabel = styled.label`
  ${Label}
`

export const InputLogin = styled.input`
  ${baseInputStyles}
`

export const FormBtn = styled.button`
  ${baseBtnSubmit}
`

export const FormBtnSvg = styled.i`
  ${baseFormBtnSvg}
`

export const RedirectCadastro = styled.div`
  margin: 15px auto;
  font-size: 0.89em;

  @media (min-width: 600px) {
    font-size: 1em;
  }
`

export const RedirectCadastroText = styled.span`
  color: #000;

  @media (max-width: 600px) {
    font-weight: 600;
  }
`

export const RedirectCadastroLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
`