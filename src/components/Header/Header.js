import {Container, ContainerHeader, ListItem, Lists} from "./HeaderStyles";

import Head from "./Head";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Container>
                <Head/>
                <nav>
                    <ContainerHeader>
                        <Lists>
                            <ListItem> <Link to="/">Home</Link> </ListItem>
                            <ListItem> <Link to="/category/us">U.S.</Link> </ListItem>
                            <ListItem> <Link to="/category/health">Health</Link> </ListItem>
                            <ListItem><Link to="/category/opinion">Opinion</Link></ListItem>
                            <ListItem><Link to="/category/technology">Technology</Link></ListItem>
                            <ListItem><Link to="/category/business">Business</Link></ListItem>
                            <ListItem><Link to="/category/arts">Arts</Link></ListItem>
                        </Lists>
                    </ContainerHeader>
                </nav>
            </Container>
        </header>
    )
}

export default Header;