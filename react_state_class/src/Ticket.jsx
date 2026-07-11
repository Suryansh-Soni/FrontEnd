import "./Ticket.css";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket-container">
      {ticket.map((number, index) => (
        <div className="ticket-ball" key={index}>
          {number}
        </div>
      ))}
    </div>
  );
}
