import { useState } from "react";
import { genNumber } from "./helper.js";
import Ticket from "./Ticket.jsx";
import "./Lottery.css";

export default function Lottery({ n = 3, winCondition }) {
  const [ticket, setTicket] = useState(genNumber(n));

  const isWinning = winCondition(ticket);

  const buyNewTicket = () => {
    setTicket(genNumber(n));
  };

  return (
    <main className="lottery-page">
      <section className={`lottery-card ${isWinning ? "winner-card" : ""}`}>
        <div className="lottery-header">
          <p className="lottery-label">Lucky Draw</p>
          <h1>Lottery World</h1>
          <p className="lottery-description">
            Generate a ticket and see whether today is your lucky day.
          </p>
        </div>

        <div className="status-box">
          <span className="status-label">Result</span>

          <h2 className={isWinning ? "winning-text" : "losing-text"}>
            {isWinning ? "Congratulations, you won!" : "Better luck next time"}
          </h2>

          <p>
            {isWinning
              ? "Your ticket matches the winning condition."
              : "Try another ticket and test your luck again."}
          </p>
        </div>

        <div className="ticket-section">
          <p className="ticket-heading">Your Ticket</p>

          <Ticket ticket={ticket} />
        </div>

        <button className="buy-ticket-btn" onClick={buyNewTicket}>
          Buy New Ticket
        </button>

        <p className="lottery-note">
          Winning condition: the sum of all ticket numbers must be 15.
        </p>
      </section>
    </main>
  );
}
