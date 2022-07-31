import {Container, GridLi, GridUl} from "./PopularNewsStyles";
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "../Card/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Splide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PopularNews = () => {
    const [news, setNews] = useState();

    const apiNews = async () => {
        try {
            const {data} = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=i0tqlsNUiXcFKRuYHE0WPDiLgISEZwiA")
            setNews(data.results);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        apiNews();
    }, [])

    return (
        <Container>
            {news ?
                <GridUl>
                    <Splide options={{
                        perPage: 3,
                        arrows: false,
                        drag: 'free',
                        gap: '1rem',
                        breakpoints: {
                            1200: {
                                perPage: 2,
                            },
                            950:{
                                perPage: 1,
                            }
                        }
                    }}>
                        {news.map((article) => (
                            <GridLi key={article.id}>
                                <Card article={article}/>
                            </GridLi>
                        ))}
                    </Splide>
                </GridUl>
                :
                <GridUl>
                    <GridLi>
                        <Skeleton height={500}/>
                    </GridLi>
                </GridUl>
            }
        </Container>
    )
}

export default PopularNews;