import {Gradient, HeadContainer, Image} from "./HeaderStyles";
import image from "../../assets/news2.jpg"

const Head = () => {
    return (
        <HeadContainer>
            <Image src={image} alt="news"/>
            <Gradient />
            <h2>The NY Times</h2>
        </HeadContainer>
    )
}

export default Head;