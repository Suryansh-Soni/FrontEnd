import { useState } from "react";

export default function LikeBtn() {
  const [isLiked, setIsLiked] = useState(false);
  

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <div>
      <h1>Like Button</h1>

      <p onClick={toggleLike} style={{ cursor: "pointer", fontSize: "2rem" }}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
