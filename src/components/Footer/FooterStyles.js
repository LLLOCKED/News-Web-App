import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: coral;
  padding: 2rem;
  
  a{
    color: coral;
  }
  a:hover{
    color: white;
  }
  div{
    width: 33%;
    text-align: center;
  }
  
  h2{
    margin-bottom: 1.5rem;
  }
  
  @media(max-width: 750px){
    flex-direction: column;
    align-items: center;
    
    div{
      width: 100%;
    }
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`