import styled from 'styled-components'
import {SplideSlide} from '@splidejs/react-splide';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`


export const GridUl = styled.ul`
    width: 100%;
`

export const GridLi = styled(SplideSlide)`
  width: 100%;
  height: 500px;
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    transform: scale(1.02);
  }
`