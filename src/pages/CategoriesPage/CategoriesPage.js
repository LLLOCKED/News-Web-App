import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Item from "../../components/Item/Item";
import styled from "styled-components";

const CategoriesPage = () => {
    const {name} = useParams();

    const [news, setNews] = useState();

    const apiNews = async () => {
        try {
            const {data} = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&fq=news_desk:(%22${name}%22)&page=1&api-key=i0tqlsNUiXcFKRuYHE0WPDiLgISEZwiA`)
            setNews(data.response.docs);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        apiNews();
    }, [name])

    return (
        <Container>
            <Header>{name.charAt(0).toUpperCase() + name.slice(1)}</Header>
            {
                news ?
                    <Ul>
                        {news.map((item) => (
                            <li key={item._id}>
                                <Item item={item}/>
                            </li>
                        ))}
                    </Ul>
                    : <h2>Загрузка...</h2>
            }
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
`

export default CategoriesPage;