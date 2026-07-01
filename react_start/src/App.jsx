import "./App.css";
import Title from "./Title";
import PdtTab from "./PdtTab";
import MsgBox from "./MsgBox";
function App() {
  return (
    <>
      <Title />
      <PdtTab />
      <MsgBox userName="John" testColor="blue" />
      </>
    
  );
}

export default App;
