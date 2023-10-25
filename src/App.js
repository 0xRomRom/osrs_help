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
// https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Ft9qipepq8bw61.png
// https://www.reddit.com/r/UI_Design/comments/n1tmc6/modern_forum_design_i_did_a_few_months_back_let/
export default App;
