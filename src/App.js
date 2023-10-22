import { useState } from "react";
import stl from "./App.module.css";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [playerName, setPlayerName] = useState(null);
  return (
    <div className={stl.app}>
      <Nav setActiveTab={setActiveTab} activeTab={activeTab} />
      <Main
        activeTab={activeTab}
        setSkills={setSkills}
        skills={skills}
        setSkillsExp={setSkillsExp}
        skillsExp={skillsExp}
        setPlayerName={setPlayerName}
        playerName={playerName}
      />
    </div>
  );
};

export default App;
