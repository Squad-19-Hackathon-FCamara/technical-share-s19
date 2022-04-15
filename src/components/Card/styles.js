import styled from 'styled-components'

export const Container = styled.div`
  background-color: #c4c4c4;
  border-radius: 0.6em;
  flex: 0 0 15.638rem;
  min-height: 21.188rem;
  position: relative;
  overflow: hidden;
  
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 1;
    padding-top: 50%;
    background: linear-gradient(transparent, #000);
  }
`

export const UserPhoto = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const Username = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 30px;
`

export const UserInfo = styled.div`
  display: grid;
  grid-gap: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  color: #fff;
  z-index: 9;
`

export const UserRole = styled.span`
  font-size: 1rem;
  font-weight: 500;
`

export const UserTags = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  
  > div, > div:nth-child(2) {
    border-color: #fff !important;
    background-color: rgb(255 255 255 / 80%) !important;
    padding: 0.3rem;
    border-radius: 10px;
    flex: 0 1 3em;

    &:hover, &:focus, &:active {
      cursor: unset;
    }
  }
`

export const ChatButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  z-index: 9;

  &:hover, &:focus, &:active {
    box-shadow: 0 0px 2px 0 rgb(0 0 0 / 40%);
  }
`