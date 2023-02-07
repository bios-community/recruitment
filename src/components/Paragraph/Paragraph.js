import './paragraph.scss'

function Paragraph (props) {
    console.log(props)
    return (
        <p className="para">{props.text}</p>
    )
}

export default Paragraph