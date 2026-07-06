import { useState } from "react";
import CommentsForm from "./CommentsForm.jsx";

export default function Comment() {
  const [comments, setComments] = useState([
    {
      username: "Guest",
      remarks: "hello ji s",
      rating: 5,
    },
  ]);

  const addNewCmnt = (newComment) => {
    setComments((comments) => [...comments, newComment]);
  };

  return (
    <div>
      <h3>All Comments</h3>

      <div className="comment">
        {comments.map((comment, index) => (
          <div className="comments" key={index}>
            <p>{comment.remarks}</p>
            <p>Rating: {comment.rating}</p>
            <p>By: {comment.username}</p>
          </div>
        ))}
      </div>

      <div style={{ border: "2px solid red", padding: "10px" }}>
        <CommentsForm addNewCmnt={addNewCmnt} />
      </div>
    </div>
  );
}
