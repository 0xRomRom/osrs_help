import { useState } from "react";
import stl from "./App.module.css";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className={stl.app}>
      <Nav setActiveTab={setActiveTab} activeTab={activeTab} />
      <Main activeTab={activeTab} />
    </div>
  );
};

export default App;
