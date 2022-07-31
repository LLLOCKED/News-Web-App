import {Contact, Container} from "./FooterStyles";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <Container>
                <div>
                    <h2>© 2022 The NY Times</h2>
                </div>
                <div>
                    <h2>Navigation</h2>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/category/us">U.S.</Link> </li>
                        <li> <Link to="/category/health">Health</Link> </li>
                        <li><Link to="/category/opinion">Opinion</Link></li>
                        <li><Link to="/category/technology">Technology</Link></li>
                        <li><Link to="/category/business">Business</Link></li>
                        <li><Link to="/category/arts">Arts</Link></li>
                    </ul>
                </div>
                <Contact>
                    <h2>Contact</h2>
                    <span>Anchorage, Alaska 99501, US</span>
                    <span>t: 907-744-3623</span>
                    <span>m: 907-350-1210</span>
                    <span>thekiyvtimes@gmail.com</span>
                </Contact>
            </Container>
        </footer>
    )
}

export default Footer;