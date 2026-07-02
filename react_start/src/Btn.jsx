function printHello(event) {
  console.log("Hello");
  console.log(event);
}

export default function Btn() {
  return <button onClick={printHello}>Click me</button>;
}
