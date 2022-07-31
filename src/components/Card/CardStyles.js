import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 100%;
  width: 100%;
`

export const Image= styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TextContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 3rem;
  text-align: left;
  font-size: 18px;
  z-index: 5;

  h2 {
    background-color: rgba(169, 125, 108, 0.75);
    padding: 7px;
  }

  h3 {
    background-color: coral;
    width: 100px;
    text-align: center;
    padding: 5px;
    color: black;
    margin-bottom: 5px;
  }
`

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  text-align: left;
  font-size: 16px;
  z-index: 5;
  
  span{
    margin-right: 10px;;
    background-color: darksalmon;
    color: black;
    padding: 7px;
  }
  
`