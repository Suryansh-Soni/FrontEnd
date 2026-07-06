import { useState } from "react";
import { genNumber, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
export default function Lottery({ n = 3, wincondition }) {
  const [ticket, setTicket] = useState(genNumber(n));
  let isWinning = wincondition(ticket);
  return (
    <>
      <h2>Welcome to the Lottery World !</h2>
      <h1>{isWinning ? "You are a Winner" : "Better Luck Next Time "}</h1>

      <div className="Ticket">
        <Ticket ticket={ticket} />
      </div>
      <button onClick={() => setTicket(genNumber(3))}>Buy New Ticket</button>
    </>
  );
}
