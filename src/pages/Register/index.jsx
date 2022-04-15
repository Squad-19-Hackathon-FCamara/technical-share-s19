import { useContext, useState } from 'react'
import { OrangeIconMobile, PlusIcon, SubmitIcon } from '../../assets/icons'
import Header from '../../components/Header'
import Tag from '../../components/Tag'
import AuthContext from '../../context/authContext'
import {
  FormContainer,
  FormRegisterHeader,
  InputContainer,
  FormBtn,
  FormRegister,
  InputLabel,
  InputRegister,
  SkillsBtn,
  InputRegisterTags,
  InputRegisterGrid,
  FormBtnSvg,
  InputTagsGrid,
  FormError,
  FormRegisterHeaderMobile,
  SelectRegister,
  OptionRegister,
} from './styles'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [tag, setTag] = useState('')
  const [tagList, setTagList] = useState([])
  const [level, setLevel] = useState('')
  

  const { userRegister, error } = useContext(AuthContext);

  let userInput = {
    email: email,
    password: password,
    name: name,
    role: role,
    tags: tagList,
    level: level
  }

  const submitUserInput = e => {
    e.preventDefault()
    userRegister(userInput)
  }

  const addTagToList = e => {
    e.preventDefault();
    if (!tag) return;
    setTagList(oldArray => [...oldArray, tag]);
    setTag('');
  }

  const renderUserTags = tagList.map(tagItem => (
    <Tag key={Math.random()} tag={tagItem} />
  ))

  return (
    <>
      <Header />
      <FormContainer>
        <FormRegister onSubmit={submitUserInput}>
          <FormRegisterHeader>Cadastro</FormRegisterHeader>
          <FormRegisterHeaderMobile>{OrangeIconMobile}</FormRegisterHeaderMobile>
          <InputContainer>
            <InputRegister
              placeholder="Seu email da empresa"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            ></InputRegister>
          </InputContainer>

          <InputContainer>
            <InputRegister
              placeholder="Sua senha ultrasecreta"
              id="senha"
              name="senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            ></InputRegister>
          </InputContainer>

          <InputContainer>
            <InputRegister
              placeholder="Seu nome (como te chamam na firma?)"
              id="nome"
              name="nome"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            ></InputRegister>
          </InputContainer>

          <InputContainer>
            <InputRegister
              placeholder="Qual seu cargo atual?"
              id="cargo"
              name="cargo"
              type="text"
              value={role}
              onChange={e => setRole(e.target.value)}
              required
            ></InputRegister>
          </InputContainer>

          <InputContainer>
            <SelectRegister
              placeholder="Qual seu nível de experiência?"
              id="nivel"
              name="nivel"
              value={level}
              onChange={e => setLevel(e.target.value)}
              required
            >
              <OptionRegister value="" disabled>Seleciona sua senioridade:</OptionRegister>
              <OptionRegister value="trainee">Trainee</OptionRegister>
              <OptionRegister value="júnior">Júnior</OptionRegister>
              <OptionRegister value="sênior">Sênior</OptionRegister>
              <OptionRegister value="pleno">Pleno</OptionRegister>
            </SelectRegister>
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="tags">Adicione suas skills e segmentos de experiência:</InputLabel>
            <InputRegisterGrid>
              <InputRegisterTags
                placeholder="HTML/CSS, Javascript, Fintech, Food services..."
                id="tags"
                name="tags"
                type="text"
                value={tag}
                onChange={e => setTag(e.target.value)}
              ></InputRegisterTags>
              <SkillsBtn onClick={addTagToList}>{PlusIcon}</SkillsBtn>
            </InputRegisterGrid>
          </InputContainer>

          <InputTagsGrid>
            {
              renderUserTags
            }
          </InputTagsGrid>

          {
            error && <FormError>{error}</FormError>
          }

          <FormBtn type="submit">
            <span>Cadastrar</span>
            <FormBtnSvg>{SubmitIcon}</FormBtnSvg>
          </FormBtn>
        </FormRegister>
      </FormContainer>
    </>
  )
}
console.log(Register);

export default Register