import "./App.css";
import AppBar from "./Components/AppBar/AppBar";
import HeroPage from "./Components/HeroPage/HeroPage";
import SecondFold from "./Components/SecondFold/SecondFold";
import ThirdFold from "./Components/ThirdFold/ThirdFold";
import FourthFold from "./Components/FourthFold/FourthFold";
import FifthFold from "./Components/FifthFold/FifthFold";
import SixthFold from "./Components/SixthFold/SixthFold";

import ToolBar from "./NativeComponents/ToolBar";
import NativeHeroPage from "./NativeComponents/NativeHeroPage";

import { Capacitor } from "@capacitor/core";
import { IonContent } from "@ionic/react";
// import { useIonViewDidEnter } from "@ionic/react-hooks";

function App() {
  return (
    <>
      {Capacitor.isNative ? <ToolBar /> : <AppBar />}
      {Capacitor.isNative ? <NativeHeroPage /> : <HeroPage />}
      <SecondFold />
      <ThirdFold />
      <FourthFold />
      <FifthFold />
      <SixthFold />
    </>
  );
}

export default App;
