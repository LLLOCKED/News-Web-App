import {Card} from "./PopularDayNewsStyles";

const Item = ({item}) => {
    return (
        <Card>
            <h4>{item.section}</h4>
            <h3>{item.title}</h3>
        </Card>
    )
}

export default Item;