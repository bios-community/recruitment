import "./main.scss";

import StartHere from "../StartHere/StartHere";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";
import Requirements from "../Requirements/Requirements";
import OpenPositions from '../OpenPositions/OpenPositions'

function Main() {
  return (
    <main className="main">
      <StartHere />
      <WhyJoinUs />
      <Requirements />
      <OpenPositions />
    </main>
  );
}

export default Main;
