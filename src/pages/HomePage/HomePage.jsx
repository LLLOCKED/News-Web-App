import PopularNews from "../../components/PopularNews/PopularNews";
import NewNews from "../../components/NewNews/NewNews";
import {Grid} from "./HomePageStyles";
import PopularDayNews from "../../components/PopularDayNews/PopularDayNews";

const HomePage = () => {
    return (
        <>
            <PopularNews/>
            <Grid>
                <NewNews/>
                <PopularDayNews/>
            </Grid>

        </>
    )
}

export default HomePage;