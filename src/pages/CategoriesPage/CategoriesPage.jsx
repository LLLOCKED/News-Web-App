import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Item from "../../components/Item/Item";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

const CategoriesPage = () => {
    const {name} = useParams();

    const [news, setNews] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const apiNews = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&fq=news_desk:(%22${name}%22)&page=1&api-key=i0tqlsNUiXcFKRuYHE0WPDiLgISEZwiA`)
            setNews(data.response.docs);
            setIsLoading(false)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        apiNews();
    }, [name])

    if (isLoading) {
        return (
            <Container>
                <Header>{name.charAt(0).toUpperCase() + name.slice(1)}</Header>
                <Ul>
                    {[...Array(10).keys()].map((index) => (
                        <Skeleton key={index} height={200}/>
                    ))}
                </Ul>
            </Container>)
    }

    return (
        <Container>
            <Header>{name.charAt(0).toUpperCase() + name.slice(1)}</Header>

            <Ul>
                {news.map((item) => (
                    <li key={item._id}>
                        <Item item={item}/>
                    </li>
                ))}
            </Ul>

        </Container>
    )
}

const Container = styled.div`
  width: 100%;
`

export const Header = styled.div`
  font-size: 2rem;
  background-color: #FD6D38;
  padding: 0.5rem;
  margin-bottom: 1rem;
`

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default CategoriesPage;