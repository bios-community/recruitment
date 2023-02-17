import "./main.scss";

import StartHere from "../StartHere/StartHere";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";
import Requirements from "../Requirements/Requirements";
import OpenPositions from '../OpenPositions/OpenPositions'
import ApplicationForm from '../ApplicationForm/ApplicationForm'
import Footer from '../Footer/Footer'

function Main() {
  return (
    <main className="main">
      <StartHere />
      <WhyJoinUs />
      <Requirements />
      <OpenPositions />
      <ApplicationForm />
      <Footer />
    </main>
  );
}

export default Main;
