import React, { useContext, useState } from 'react'
import AuthContext from '../../context/authContext'
import {
  FormBtn,
  FormLogin,
  HeaderTitle,
  InputLabel,
  InputLogin,
  RedirectCadastro
} from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let userInput = { email: email, password: password }

  const { userLogin, error } = useContext(AuthContext)

  const submitUserInput = e => {
    e.preventDefault()
    userLogin(userInput)
  }

  return (
    <>
      <HeaderTitle>Technical Share</HeaderTitle>

      <FormLogin onSubmit={submitUserInput}>
        <div>
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
        </div>

        <div>
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
        </div>

        <FormBtn type="submit">Entrar</FormBtn>
      </FormLogin>

      {
        error && <p>{error}</p>
      }

      <div>
        <RedirectCadastro href="/cadastro">
          Ops, ainda não tem cadastro? Fazer cadastro
        </RedirectCadastro>
      </div>
    </>
  )
}

export default Login
