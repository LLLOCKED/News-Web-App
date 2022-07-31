import styled from 'styled-components'

export const HeadContainer = styled.div`
  position: relative;
  text-align: center;
  height: 7rem;
  
  h2{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 4rem;
    z-index: 2;
    @media(max-width: 1000px){
      font-size: 2.5rem;
    }
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.3) 0%);
  top:0;
  z-index: 1;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: 50% 53%;
`
export const ContainerHeader = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: #fd6d38;
  display: flex;
  align-items: center;
`

export const Lists = styled.ul`
  display: flex;
  color: #000;
  @media(max-width: 700px){
    overflow: scroll;
  }
`

export const ListItem = styled.li`
  padding: 0.7rem;
  transition: 0.3s;
  
  a{
    transition: 0.3s;
  }
  
  a:hover{
    color: #fff;
  }
`
