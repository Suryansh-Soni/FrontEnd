import { useState } from "react";
export default function Form() {
  let [fieldname, setFieldName] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  let handelChange = (e) => {
    setFieldName({
      ...fieldname,
      [e.target.id]: e.target.value,
    });
  };

  let handelSubmit = (e) => {
    e.preventDefault();
    console.log(fieldname);
  };
  return (
    <form action="" onSubmit={handelSubmit}>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        value={fieldname.fullName}
        id="fullName"
        onChange={handelChange}
      /> <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={fieldname.email}
        id="email"
        onChange={handelChange}
      /> <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        value={fieldname.password}
        id="password"
        onChange={handelChange}
      />
      <p>{fieldname.fullName}</p>
      <p>{fieldname.email}</p>
      <p>{fieldname.password}</p>
      <button>Submit</button>
    </form>
  );
}
