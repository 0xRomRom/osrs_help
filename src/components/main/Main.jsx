import stl from "./Main.module.css";
import Home from "./home/Home";
import { useState } from "react";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <div className={stl.main}>{selectedTab === "home" ? <Home /> : ""}</div>
  );
};

export default Main;
