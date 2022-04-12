import { css } from 'styled-components'

export const baseFormContainer = css`
  margin: auto;
  display: grid;
  align-items: center;
  min-height: 100vh;

  @media (min-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
    max-width: 603px;
    min-height: auto;
  }
`

export const baseForm = css`
  padding: 30px;
  display: grid;

  @media (min-width: 600px) {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 14px rgb(0 0 0 / 25%);
    border-radius: 15px;
    justify-content: center;
  }
`

export const FormHeader = css`
  color: #36357E;
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 30px;

  @media(max-width: 600px) {
    display: none;
  }
`

export const FormHeaderMobile = css`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;

  svg {
    width: 10em;
  }

  @media(min-width: 600px) {
    display: none;
  }
`

export const InputContent = css`
  margin-bottom: 30px;
`

export const Label = css`
  display: block;
  margin-bottom: 10px;
`

export const baseInputStyles = css`
  border: 1px solid #5251A2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;
  width: 100%;

  @media (min-width: 600px) {
    padding: 20px 15px;
  }
`

export const baseBtnSubmit = css`
  background-color: #FE662E;
  border: 1px solid #FEBBA2;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 10px 0px 10px 10px;
  font-size: 1.1rem;
  padding: 10px 30px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-transform: uppercase;

  &:hover, &:focus, &:active {
    cursor: pointer;
    box-shadow: 0 4px 7px 0 rgb(0 0 0 / 40%);
  }

  @media (min-width: 600px) {
    padding: 15px 50px;
  }
`

export const baseFormBtnSvg = css`
  width: 0.8em;
  height: 0.8em;
`

export const baseFormError = css`
  color: #ff0000;
  font-weight: 500;
`