import {CardContainer, FooterContainer, Image, TextContainer} from "./CardStyles";

const Card = ({article}) => {
    const image = article.media;
    return (
        <CardContainer>
            <Image src={image.length > 0 ? image[0]["media-metadata"][2].url : null} alt={article.title} />
            <TextContainer>
                <h3>{article.section}</h3>
                <h2>{article.title}</h2>
            </TextContainer>
            <FooterContainer>
                <span>{article["byline"]}</span>
                <span>{article["published_date"]}</span>
            </FooterContainer>
        </CardContainer>
    )
}

export default Card;