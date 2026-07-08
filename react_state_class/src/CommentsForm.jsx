import { Formik, Form, Field } from "formik";

export default function CommentsForm({ addNewCmnt }) {
  return (
    <div>
      <h4>Give me a Comment!</h4>

      <Formik
        initialValues={{
          username: "",
          remarks: "",
          rating: 5,
        }}
        onSubmit={(values, { resetForm }) => {
          addNewCmnt(values);
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="username">Username:</label>
          <Field
            type="text"
            name="username"
            id="username"
            placeholder="Your name here"
          />

          <br />

          <label htmlFor="remarks">Remarks:</label>
          <Field
            as="textarea"
            name="remarks"
            id="remarks"
            placeholder="Your remarks here"
          />

          <br />

          <label htmlFor="rating">Rating:</label>
          <Field
            type="number"
            name="rating"
            id="rating"
            min="1"
            max="5"
            placeholder="Ratings (1-5)"
          />

          <br />

          <button type="submit">Comment</button>
        </Form>
      </Formik>
    </div>
  );
}