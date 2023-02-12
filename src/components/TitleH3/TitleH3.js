import './titleh3.scss'

function TitleH3 (props) {
    return (
        <h3 className="title_h3">
            <img src={props.icon} alt="" className="title_h3__icon" />
            <span className="title_h3__text">{props.text}</span>
        </h3>
    )
}

export default TitleH3