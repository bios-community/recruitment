import './openpositions.scss'
import opnePositionsIcon from '../../assets/open_positions_icon.png'
import developmentTeamIcon from '../../assets/development_team_icon.png'
import graphicsTeamIcon from '../../assets/graphics_team_icon.png'
import socialMediaTeamIcon from '../../assets/social_media_team_icon.png'
import eventsTeamIcon from '../../assets/events_team_icon.png'
import communityManagersIcon from '../../assets/community_managers_icon.png'

import TitleH2 from '../TitleH2/TitleH2'
import Paragraph from '../Paragraph/Paragraph'
import OpenRole from '../OpenRole/OpenRole'
import Note from '../Note/Note'

function OpenPositions () {

    let openPositions = [
        {
            teamName: "Development Team",
            teamIcon: developmentTeamIcon,
            roleText: "Work as maintainer and contributor of all the open-source projects created by BIO-S Community.",
            requirementsText: "Have technical knowledge and have at least 1 project to showcase (no matter how small it is)."
        },
        {
            teamName: "Graphics Team",
            teamIcon: graphicsTeamIcon,
            roleText: "Design posters, banners and all the graphical need of the BIO-S Community.",
            requirementsText: "Have at least 3 design to showcase (no matter what it is). "
        },
        {
            teamName: "Social Media Team",
            teamIcon: socialMediaTeamIcon,
            roleText: "Manage the social media accounts of BIO-S Community. This will include presenting ideas to increase reach of social media accounts & working with other teams to constantly update the community of what’s happening and what’s scheduled.",
            requirementsText: "No specific requirements, but have to give the time commitment to present ideas and increase the online reach."
        },
        {
            teamName: "Events Team",
            teamIcon: eventsTeamIcon,
            roleText: "Managing online events such as GHW or blog-a-thons for BIO-S. This will include branding about the event and managing the event all-in-all.",
            requirementsText: "No specific requirements, but have to give the time commitment to present ideas and manage the events."
        },
        {
            teamName: "Community Managers",
            teamIcon: communityManagersIcon,
            roleText: "Managing the community by ensuring the rules are being followed & representing the community wherever needed.",
            requirementsText: "No specific requirements, but have to give the time commitment to manage the community."
        }
    ]

    let openPositionsElements = openPositions.map((item, index) => <OpenRole key={index.toString()} {...item} />)

    return (
        <section className="open-positions">
            <TitleH2 
                text="Open Positions"
                icon={opnePositionsIcon}
            />
            <Paragraph 
                text="We are currently looking for members for the following teams."
            />
            <div className="open_role">{openPositionsElements}</div>
            <Note 
                type="success"
                text="You can apply for more than one role."
            />
        </section>
    )
}

export default OpenPositions