function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted");
  console.log(event);
}

export default function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
} 
