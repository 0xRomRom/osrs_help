import stl from "./Main.module.css";
import Home from "./home/Home";
import SkillsTab from "./skills/SkillsTab";

const Main = (props) => {
  return (
    <div className={stl.main}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <div className={stl.content}>
        {props.activeTab === "home" && (
          <Home
            setSkills={props.setSkills}
            skills={props.skills}
            setSkillsExp={props.setSkillsExp}
            skillsExp={props.skillsExp}
            setPlayerName={props.setPlayerName}
            playerName={props.playerName}
          />
        )}
        {props.activeTab === "skills" && (
          <SkillsTab
            setSkills={props.setSkills}
            skills={props.skills}
            setSkillsExp={props.setSkillsExp}
            skillsExp={props.skillsExp}
            setPlayerName={props.setPlayerName}
            playerName={props.playerName}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
