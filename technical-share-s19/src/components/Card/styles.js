import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background-color: #c4c4c4;
  border-radius: 0.6em;
  flex: 0 0 15.638rem;
  min-height: 21.188rem;
  display: grid;
  grid-gap: 10px;
  position: relative;
`

export const UserPhoto = styled.img`
  width: 100%;
  border-radius: 0.5em 0.5em 0 0;
`

export const Username = styled.h3`
  font-size: 0.875rem;
`

export const UserInfo = styled.div`
  display: grid;
  grid-gap: 3px;
`

export const UserRole = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
`

export const UserTags = styled.div`
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
  justify-content: center;
`
