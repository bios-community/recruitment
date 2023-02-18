import './unorderedlist.scss'
import ListItem from '../ListItem/ListItem'

function UnorderedList (props) {
    let ListItemElements = props.listItems.map((item, index) => <ListItem key={index.toString()} text={item} />)

    return (
        <ul className="ul">
            {ListItemElements}
        </ul>
    )
}

export default UnorderedList