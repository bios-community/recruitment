import TitleH2 from "../TitleH2/TitleH2"
import Paragraph from "../Paragraph/Paragraph"
import Note from "../Note/Note"
import fileIcon from '../../assets/file_icon.png'

function Requirements () {
    return (
        <section className="section" id="requirements">
            <TitleH2 
                icon={fileIcon}
                text="Requirements to apply"
            />
            <Paragraph 
                text="1. Have passion for open-source and communities."
            />
            <Paragraph 
                text="Yes! That’s it. The only thing you need to apply is to have that passion for open-source and communities. All other role based requirements are stated in next section."
            />
            <Note 
                text="Due to some geographical restrictions, we are only recruiting folks living in Nashik. But don’t worry, you don’t have to be a team member to help community, you can do it even by yourself, and if we see you helping the community actively, we’ll definitely consider you to be a team member in the future."
                type="warning"
            />
        </section>
    )
}

export default Requirements