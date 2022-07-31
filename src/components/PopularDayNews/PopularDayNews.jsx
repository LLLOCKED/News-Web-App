import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Header, List} from "./PopularDayNewsStyles";
import Item from "./Item";
import Skeleton from "react-loading-skeleton";


const PopularDayNews = () => {
    const [news, setNews] = useState();

    const apiNews = async () => {
        try {
            const {data} = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=i0tqlsNUiXcFKRuYHE0WPDiLgISEZwiA")
            setNews(data.results)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        apiNews();
    }, [])

    return (
        <Container>
            <Header>Popular day</Header>
            {news ?
                <List>
                    {news.map((item) => (
                            <li key={item.id}><Item item={item} /></li>
                        )
                    )}
                </List> : <List>
                    {[...Array(50).keys()].map((index) => (
                        <Skeleton key={index} height={70}/>
                    ))}
                </List>
            }
        </Container>
    )
}

export default PopularDayNews;