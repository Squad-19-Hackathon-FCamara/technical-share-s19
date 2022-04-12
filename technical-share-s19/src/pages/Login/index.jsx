import React, { useContext, useState } from 'react'
import { SubmitIcon } from '../../assets/icons'
import Header from '../../components/Header'
import AuthContext from '../../context/authContext'
import {
  FormBtn,
  FormBtnSvg,
  FormContainer,
  FormError,
  FormLogin,
  FormLoginHeader,
  InputContainer,
  InputLabel,
  InputLogin,
  RedirectCadastro,
  RedirectCadastroLink,
  RedirectCadastroText
} from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let userInput = { email: email, password: password }

  const { userLogin, errorAuth } = useContext(AuthContext)

  const submitUserInput = e => {
    e.preventDefault()
    userLogin(userInput)
  }

  return (
    <>
      <Header />
      <FormContainer>
        <FormLogin onSubmit={submitUserInput}>
          <FormLoginHeader>Login</FormLoginHeader>
          <InputContainer>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <InputLogin
              placeholder="Seu email da empresa"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            ></InputLogin>
          </InputContainer>

          <InputContainer>
            <InputLabel htmlFor="senha">Senha</InputLabel>
            <InputLogin
              placeholder="Sua senha ultrasecreta"
              id="senha"
              name="senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            ></InputLogin>
          </InputContainer>

          {errorAuth && <FormError>{errorAuth}</FormError>}

          <FormBtn type="submit">
            <span>Entrar</span>
            <FormBtnSvg>{SubmitIcon}</FormBtnSvg>
          </FormBtn>

          <RedirectCadastro>
            <RedirectCadastroText>Ops, ainda não tem cadastro? </RedirectCadastroText>
            <RedirectCadastroLink href="/register">Fazer cadastro</RedirectCadastroLink>
          </RedirectCadastro>
        </FormLogin>
      </FormContainer>
    </>
  )
}

export default Login
