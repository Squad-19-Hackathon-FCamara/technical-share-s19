import styled from 'styled-components'
import { baseBtnSubmit, baseForm, baseFormBtnSvg, baseFormContainer, baseFormError, baseInputStyles, FormHeader, FormHeaderMobile, InputContent, Label } from '../../assets/styles'

export const FormContainer = styled.div`
  ${baseFormContainer}
`

export const FormRegister = styled.form`
  ${baseForm}
  max-width: 34rem;
`

export const FormRegisterHeader = styled.h3`
  ${FormHeader}
`

export const FormRegisterHeaderMobile = styled.span`
  ${FormHeaderMobile}
`

export const FormError = styled.p`
  ${baseFormError}
  margin-top: 15px;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  ${InputContent}
`

export const InputLabel = styled.label`
  ${Label}
`

export const InputRegister = styled.input`
  ${baseInputStyles}
`
export const selectRegister = styled.select`
 display: block;
`
export const optionRegister = styled.option`
 display: block;
`

export const InputRegisterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.15fr;
`

export const InputRegisterTags = styled.input`
  ${baseInputStyles}
  border-radius: 10px 0 0 10px;
  border-right: 0;
`

export const FormBtn = styled.button`
  ${baseBtnSubmit}
`

export const FormBtnSvg = styled.i`
  ${baseFormBtnSvg}
`

export const SkillsBtn = styled.button`
  background-color: #FE662E;
  border: 1px solid #5251A2;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 0px 10px 10px 0px;
  border-left: 0;
  
  &:hover, &:focus, &:active {
    cursor: pointer;
    box-shadow: 0 4px 7px 0 rgb(0 0 0 / 40%);
  }
`

export const InputTagsGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr)
`