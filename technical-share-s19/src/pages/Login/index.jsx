import React, { useState } from "react"
import {
  FormBtn,
  FormLogin,
  HeaderTitle,
  InputLabel,
  InputLogin,
  RedirectCadastro
} from "./styles"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();

    let user = { email: email, password: password }
    const response = await fetch('http://localhost:3003/users/login', { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <HeaderTitle>Technical Share</HeaderTitle>

      <FormLogin onSubmit={userLogin}>
        <div>
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <InputLogin placeholder="Seu email da empresa" id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required></InputLogin>
        </div>

        <div>
          <InputLabel htmlFor="senha">Senha</InputLabel>
          <InputLogin placeholder="Sua senha ultrasecreta" id="senha" name="senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required></InputLogin>
        </div>

        <FormBtn type="submit">Entrar</FormBtn>
      </FormLogin>

      <div>
        <RedirectCadastro href="/cadastro">Ops, ainda não tem cadastro? Fazer cadastro</RedirectCadastro>
      </div>
    </>
  )
}

export default Login