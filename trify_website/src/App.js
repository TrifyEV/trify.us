import "./App.css";
import AppBar from "./Components/AppBar/AppBar";
import HeroPage from "./Components/HeroPage/HeroPage";
import SecondFold from "./Components/SecondFold/SecondFold";
import ThirdFold from "./Components/ThirdFold/ThirdFold";
import FourthFold from "./Components/FourthFold/FourthFold";
import FifthFold from "./Components/FifthFold/FifthFold";
import SixthFold from "./Components/SixthFold/SixthFold";

function App() {
  return (
    <>
      {/* <div style={{ paddingTop: "env(safe-area-inset-top)" }}> */}
      <AppBar />
      <HeroPage />
      <SecondFold />
      <ThirdFold />
      <FourthFold />
      <FifthFold />
      <SixthFold />
      {/* </div> */}
    </>
  );
}

export default App;
