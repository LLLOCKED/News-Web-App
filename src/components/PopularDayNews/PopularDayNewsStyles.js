import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Header = styled.div`
  font-size: 2rem;
  background-color: #FD6D38;
  padding: 0.5rem;
`

export const List = styled.ul`
  margin-top: 1rem;
`

export const Card = styled.div`
  background-color: #f7f7f7;
  border-bottom: 1px solid black;
  padding: 0.6rem;
  font-size: 0.8rem;
  cursor: pointer;
  
  h4{
    background-color: coral;
    width: 50%;
    padding: 0.3rem;
  }

  &:hover {
    h3 {
      color: #c73a3a;
    }
    h4{
      border-left: 5px solid black;
      transition: 0.1s;
    }
  }
`
