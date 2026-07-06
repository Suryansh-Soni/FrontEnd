import { useState } from "react";

export default function CommentsForm({ addNewCmnt }) {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewCmnt(formData);

    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give me a Comment!</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={formData.username}
          name="username"
          onChange={handleChanges}
          placeholder="Your name here"
          id="username"
        />

        <br />

        <label htmlFor="remarks">Remarks:</label>
        <textarea
          name="remarks"
          id="remarks"
          value={formData.remarks}
          placeholder="Your remarks here"
          onChange={handleChanges}
        />

        <br />

        <label htmlFor="rating">Rating:</label>
        <input
          placeholder="Ratings (1-5)"
          type="number"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChanges}
        />

        <button>Comment</button>
      </form>
    </div>
  );
}
