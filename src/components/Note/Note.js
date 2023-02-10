import './note.scss'

function Note (props) {
    return (
        <div className={`note note--${props.type}`} >
            <span className="note__bold">Note: </span>{props.text}
        </div>
    )
}

export default Note