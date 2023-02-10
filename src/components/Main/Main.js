import "./main.scss";
// import Section from '../../components/Section/Section'
import TitleH2 from "../../components/TitleH2/TitleH2";
import Paragraph from "../../components/Paragraph/Paragraph";
import arrowIcon from "../../assets/arrow_icon.png";
import addIcon from '../../assets/add_icon.png'
import UnorderedList from "../UnorderedList/UnorderedList";

let listItems = [
  "Monthly mentorship from Tech Industry leaders.",
  "You will have the opportunity to serve as a volunteer or perhaps a core team member in the majority of offline events hosted by the BIO-S Community or Adarsh Dubey.",
  "Get the experience of making a community grow from scratch.",
  "Get the experience of working in a team.",
]

function Main() {
  return (
    <main className="main">
      <section className="section">
        <TitleH2 
            text="Start here"
            icon={arrowIcon}
        />
        <Paragraph
          text="Heyy there community,
                It’s really exciting to announce that BIO-S Community is looking to recruit core team members that will be responsible for running the community successfully. Let us start by introducing what BIO-S is."
        />
        <Paragraph 
            text="BIO-S Community is a student-led organization based in Nashik, India, that is committed to promoting open-source culture, hackathons, and community building among students. With around 250 members, the community operates mainly through its Discord platform, providing a space for students to collaborate, network, and learn from one another. Despite being based in Nashik, BIO-S welcomes members from all around the world, creating a diverse and inclusive community for all tech enthusiasts. The community has organized its own events and actively participates in programs such as MLH Global Hack Week. This allows members to showcase their skills, share their ideas, and engage with the latest developments in technology. By being a part of BIO-S, students can gain valuable experience and be a part of a vibrant and growing community of tech-savvy individuals."
        />
        <Paragraph
            text="Adarsh Dubey, a core team member of WeMakeDevs & CNCF Nashik, presently serves as the community's leader. In addition to him, Pranav Prajapati, a Machine Learning Engineer and ardent supporter of open-source software, serves as the community manager for BIO-S."
        />
      </section>
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
    </main>
  );
}

export default Main;
