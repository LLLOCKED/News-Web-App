import {Container, Header, ListNews} from "./NewNewsStyle";
import {useEffect,useState} from "react";
import axios from "axios";
import Item from "../Item/Item";
import Skeleton from "react-loading-skeleton";

function formatDate(date, format) {
    const map = {
        mm: (date.getMonth() + 1).length > 1 ? date.getMonth() + 1 : ('0' + (date.getMonth() + 1)),
        dd: date.getDate(),
        yyyy: date.getFullYear().toString(),
    }

    return format.replace(/mm|dd|yyyy/gi, matched => map[matched])
}

const NewNews = () => {
    const [news, setNews] = useState();

    const apiNews = async () => {
        try {
            const nowDate = new Date();
            const date = formatDate(nowDate, 'yyyymmdd')
            const {data} = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&begin_date=${date}&end_date=${date}&page=1&api-key=i0tqlsNUiXcFKRuYHE0WPDiLgISEZwiA`)
            setNews(data.response.docs);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        apiNews();
    }, [])

    return (
        <Container>
            <Header>New news</Header>
            {news ?
                <ListNews>
                    {news.map((item) => (
                            <li key={item._id}>
                                <Item item={item}/>
                            </li>
                        )
                    )}
                </ListNews> :
                <ListNews>
                    {[...Array(10).keys()].map((index) => (
                        <Skeleton key={index} height={300}/>
                    ))}
                </ListNews>
            }
        </Container>
    )
}

export default NewNews;