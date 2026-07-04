import { useState } from "react";
export default function State() {
  const [obj, setObj] = useState({ name: "John", age: 30 });
  const [arr, setArr] = useState(["hello sir"]);
  function updateArr() {
    setArr((prev) => {
      return [...prev, "hello world"];
    });
  }
  // function updateName() {
  //   setObj((prev) => {
  //     return { ...prev, name: "Doe" };
  //   });
  // }

  function updateName(){
    setObj({...obj,name:"Doe"});
  }
  function updateAge() {
    setObj((prev)=>{
      return {...prev,age:prev.age+1};
    })
  }
  // function updateAge() {
  //   // const age = obj.age + 1;
  //   setObj({ ...obj, age: obj.age + 1 });
  // }
  return (
    <>
      <h1 onClick={updateArr}>Array Elements : {arr}</h1>
      <h1>the name is {obj.name}</h1>
      <button onClick={updateName}>Update Name</button>
      <p>the age is {obj.age}</p>
      <button onClick={updateAge}>Update Age</button>
    </>
  );
}
