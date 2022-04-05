import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  border: none;
  border-radius: 15px;
  background-color: #c4c4c4;
  justify-content: flex-end;
  align-items: center;
`

const Input = styled.input`
  border: none;
  border-radius: 15px;
  width: 100%;
  height: 2.5rem;
  padding: 0.313rem 0.625rem;
  background-color: inherit;
  flex: 1 1 auto;
  /* margin-top: 1.563rem; */
`

const Button = styled.button`
  padding: 5px;
  border-radius: 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
`

export { Form, Input, Button }
