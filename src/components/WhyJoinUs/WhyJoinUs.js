import UnorderedList from "../UnorderedList/UnorderedList";
import TitleH2 from "../../components/TitleH2/TitleH2";
import Paragraph from "../../components/Paragraph/Paragraph";
import addIcon from '../../assets/add_icon.png'

let listItems = [
    "Monthly mentorship from Tech Industry leaders.",
    "You will have the opportunity to serve as a volunteer or perhaps a core team member in the majority of offline events hosted by the BIO-S Community or Adarsh Dubey.",
    "Get the experience of making a community grow from scratch.",
    "Get the experience of working in a team.",
]

function WhyJoinUs () {
    return (
        <section className="section" id="why-join-us">
            <TitleH2 
                icon={addIcon}
                text="Why Join Us?"
            />
            <Paragraph 
                text="We are recruiting core team members, and you can apply to be a part of this budding community. Well, why should you join in and work for an open-source community? You’ll get the following perks!"
            />
            <UnorderedList 
                listItems={listItems}
            />
      </section>
    )
}

export default WhyJoinUs