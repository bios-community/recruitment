import './titleh2.scss'

function TitleH2 (props) {
    return (
        <h2 className="title_h2">
            <img src={props.icon} alt="" className="title_h2__icon" />
            <span className="title_h2__text">{props.text}</span>
        </h2>
    )
}

export default TitleH2