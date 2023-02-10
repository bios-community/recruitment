import './listitem.scss'

function ListItem (props) {
    return (
        <li className="li"><span>{props.text}</span></li>
    )
}

export default ListItem