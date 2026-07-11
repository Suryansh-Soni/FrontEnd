import Lottery from "./Lottery.jsx";
import { sum } from "./helper.js";

function App() {
  const winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return <Lottery n={3} winCondition={winCondition} />;
}

export default App;
