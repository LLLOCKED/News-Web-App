import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media(max-width: 1000px){
    display: flex;
    flex-direction: column;
  }
`