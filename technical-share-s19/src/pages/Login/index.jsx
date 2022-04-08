import React from "react"
import { FormBtn, FormLogin, HeaderTitle, InputLabel, InputLogin } from "./styles"

const Login = () => {
  return (
    <div>
      <div>
        <HeaderTitle>Technical Share</HeaderTitle>

        <FormLogin>
          <div>
            <InputLabel placeholder="Seu email da empresa">E-mail</InputLabel>
            <InputLogin placeholder="Sua senha ultrasecreta"></InputLogin>
          </div>

          <div>
            <InputLabel placeholder="Seu email da empresa">E-mail</InputLabel>
            <InputLogin placeholder="Sua senha ultrasecreta"></InputLogin>
          </div>

          <FormBtn>Entrar</FormBtn>
        </FormLogin>
      </div>
    </div>
  )
}

export default Login