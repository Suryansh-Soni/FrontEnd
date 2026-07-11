import { useState } from "react";
import CommentsForm from "./CommentsForm.jsx";

export default function Comment() {
  const [comments, setComments] = useState([
    {
      username: "Suryansh",
      remarks: "Great stay",
      rating: 5,
    },
  ]);

  const addNewCmnt = (newComment) => {
    setComments((comments) => [...comments, newComment]);
  };

  return (
    <div>
      <div style={{ border: "2px solid grey", padding: "10px" }}>
        <CommentsForm addNewCmnt={addNewCmnt} />
      </div>

      <h3>
        <u>All Comments</u>
      </h3>
      <div className="comment">
        {comments.map((comment, index) => (
          <div
            className="comments"
            key={index}
            style={{ border: "2px dashed darkgray" }}
          >
            <p>{comment.remarks}</p>
            <p>Rating: {comment.rating}</p>
            <p>By: {comment.username}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
