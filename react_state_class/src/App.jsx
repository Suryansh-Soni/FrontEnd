import "./App.css";
import LikeBtn from "./LikeBtn.jsx";
import Obj_state from "./Obj_state.jsx";
import Todo from "./Todolist.jsx";
import Lottery from "./Lottery.jsx";
import TicketNum from "./TicketNum.jsx";
import Ticket from "./Ticket.jsx";
import { sum } from "./helper.js";
function App() {
  let wincondition = (ticket) => {
    sum(ticket) === 15;
  };

  return (
    <div className="App">
      <Lottery n={3} wincondition={wincondition} />
    </div>
  );
}

export default App;
