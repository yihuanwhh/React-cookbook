import styled from 'styled-components'

const SearchContainer = styled.div`
  padding:.12rem .15rem;
`

const InputContainer = styled.div`
  height:.4rem;
  border:1px solid #ee472f;
  border-radius:.04rem;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#666;
  background:#fff;
  img {
    width:.2rem;
    height:.2rem;
  }
`

export {
  SearchContainer,
  InputContainer
}