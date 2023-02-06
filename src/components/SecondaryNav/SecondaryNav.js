import './secondary_nav.scss';

function SecondaryNav () {
    return  (
        <div className="secondary_nav">
            <a href="#header" className="secondary_nav__link">Start Here</a>
            <a href="#why-join-us" className="secondary_nav__link">Why Join Us?</a>
            <a href="#requirements" className="secondary_nav__link">Requirements</a>
            <a href="#open-positions" className="secondary_nav__link">Open Positions</a>
            <a href="#application-form" className="secondary_nav__link">Application Form</a>
        </div>
    )
}

export default SecondaryNav