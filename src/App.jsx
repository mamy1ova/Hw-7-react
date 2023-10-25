import "./App.css";
import MediaQuery from "./components/taskFife/MediaQuery";
import Conditions from "./components/taskFour/Conditions";
import ColoredElement from "./components/taskOne/ColoredElement";
import ParentComponent from "./components/taskThree/ParentComponent";
import StateButton from "./components/taskTwo/UI/StateButton";

const App = () => {
  return (
    <>
      <ColoredElement />
      <StateButton />
      <ParentComponent />
      <Conditions />
      <MediaQuery />
    </>
  );
};

export default App;
