import { useContext, useState } from 'react'
import AuthContext from '../../context/authContext'
import {
  FormBtn,
  FormLogin,
  HeaderTitle,
  InputLabel,
  InputLogin,
  SkillsBtn,
} from './styles'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [tag, setTag] = useState('')
  const [tagList, setTagList] = useState([])

  const {userRegister, error } = useContext(AuthContext);

  let userInput = { email: email, password: password, name: name, role: role, tags: tagList }

  const submitUserInput = e => {
    e.preventDefault()
    userRegister(userInput)
  }

  const addTagToList = e => {
    e.preventDefault();
    setTagList(oldArray => [...oldArray, tag]);
    setTag('');
  }

  return (
    <>
      <HeaderTitle>Technical Share</HeaderTitle>

      <p>
        Vamos te cadastrar para começar essa jornada de aprendizado!
      </p>

      <FormLogin onSubmit={submitUserInput}>
        <div>
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

        <div>
          <InputLogin
            placeholder="Seu nome (como te chamam na firma?)"
            id="nome"
            name="nome"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          ></InputLogin>
        </div>

        <div>
          <InputLogin
            placeholder="Qual seu cargo atual?"
            id="cargo"
            name="cargo"
            type="text"
            value={role}
            onChange={e => setRole(e.target.value)}
            required
          ></InputLogin>
        </div>

        <div>
          <InputLabel htmlFor="tags">Adicione suas skills e seguimentos de experiência:</InputLabel>
          <div>
          <InputLogin
            placeholder="HTML/CSS, Javascript, Fintech, Food services..."
            id="tags"
            name="tags"
            type="text"
            value={tag}
            onChange={e => setTag(e.target.value)}
          ></InputLogin>
          <SkillsBtn onClick={addTagToList}>Adicionar</SkillsBtn>
          </div>
        </div>

        <FormBtn type="submit">Cadastrar</FormBtn>
      </FormLogin>

      {
        error && <p>{error}</p>
      }
    </>
  )
}

export default Register