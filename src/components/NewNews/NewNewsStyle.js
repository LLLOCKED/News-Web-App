import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
  font-size: 2rem;
  background-color: #FD6D38;
  padding: 0.5rem;
`

export const ListNews = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: 1rem;
  
  @media(max-width: 480px){
    grid-template-columns: repeat(1, 1fr);
  }
`

