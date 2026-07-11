import { useFormik } from "formik";

export default function CommentsForm({ addNewCmnt }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    onSubmit: (values, { resetForm }) => {
      addNewCmnt(values);
      resetForm();
    },
  });

  return (
    <div>
      <h2>
        <b>Write your Comment!</b>
      </h2>
      <br />

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Your name here"
          value={formik.values.username}
          onChange={formik.handleChange}
        />

        <br />

        <label htmlFor="remarks">Remarks:</label>
        <textarea
          id="remarks"
          name="remarks"
          placeholder="Your remarks here"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        />

        <br />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          placeholder="Ratings (1-5)"
          value={formik.values.rating}
          onChange={formik.handleChange}
        />

        <br />

        <button type="submit">Comment</button>
      </form>
    </div>
  );
}
