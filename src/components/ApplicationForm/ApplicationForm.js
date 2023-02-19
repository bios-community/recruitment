import './applicationform.scss'
import TitleH2 from '../TitleH2/TitleH2'
import applicationFormIcon from '../../assets/application_form_icon.png'
import { Widget } from '@typeform/embed-react'

function ApplicationForm () {
    return (
        <section className="application-form" id='application-form'>
            <TitleH2
                text="Application Form"
                icon={applicationFormIcon}
            />
            <Widget id="qwclfSmo" style={{ width: '100%', height: '600px', margin: '3rem 0 0 0' }} className="typeform" />
        </section>
    )
}

export default ApplicationForm