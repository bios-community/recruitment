import arrowIcon from "../../assets/arrow_icon.png";
import TitleH2 from "../../components/TitleH2/TitleH2";
import Paragraph from "../../components/Paragraph/Paragraph";

function StartHere() {
  return (
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
  );
}

export default StartHere