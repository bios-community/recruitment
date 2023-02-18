import './openrole.scss'
import TitleH3 from '../TitleH3/TitleH3'

function OpenRole (props) {
    return (
        <div className="open-role">
            <TitleH3 
                text={props.teamName}
                icon={props.teamIcon}
            />
            <p className='open-role__paragraph open-role__paragraph--role'><span className="open-role__paragraph__bold">Role: </span>{props.roleText}</p>
            <p className='open-role__paragraph open-role__paragraph--requirements'><span className="open-role__paragraph__bold">Requirements: </span>{props.requirementsText}</p>
        </div>
    )
}

export default OpenRole