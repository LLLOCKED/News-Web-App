import {AiFillCalendar} from "react-icons/ai";
import styled from "styled-components";

const Item = ({item}) => {
    return (
        <Card>
            <TextContainer>
                <h3>{item['news_desk']}</h3>
                <h2>{item.headline.main}</h2>
                <span>{item.snippet}</span>
            </TextContainer>
            <FooterContainer>
                <AiFillCalendar/>
                <span>{item['pub_date'].substring(0, 10)}</span>
                <span>{item['pub_date'].substring(11, 19)}</span>
            </FooterContainer>
        </Card>
    );
}



export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f7f7f7;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    h2 {
      color: #c73a3a;
    }
    h3{
      border-left: 15px solid black;
      transition: 0.2s;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  
  h3{
    background-color: coral;
    width: 200px;
    padding: 5px;
    color: black;
    margin-bottom: 5px;
    border-left: 5px solid black;
    transition: 0.2s;
  }
  
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  svg{
    color: #FD6D38;
    font-size: 1rem;
  }
  
  span{
    margin-right: 1rem;
  }
`

export default Item;