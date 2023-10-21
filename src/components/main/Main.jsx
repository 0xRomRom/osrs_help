import stl from "./Main.module.css";
import Home from "./home/Home";
import SkillsTab from "./skills/SkillsTab";

const Main = (props) => {
  return (
    <div className={stl.main}>
      {props.activeTab === "home" && <Home />}
      {props.activeTab === "skills" && <SkillsTab />}
    </div>
  );
};

export default Main;
