import stl from "./SkillsGrid.module.css";

import attackIcon from "../../../../assets/skillicons/Attack.webp";
import hitpointsIcon from "../../../../assets/skillicons/Hitpoints.webp";
import miningIcon from "../../../../assets/skillicons/Mining.webp";
import borderImg from "../../../../assets/skillicons/Border.png";

const SkillsGrid = () => {
  return (
    <div className={stl.renderedSkills}>
      <div className={`${stl.skillRow} ${stl.row1}`}>
        <div className={stl.skillLvl}>
          <img src={attackIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>70</span>
            <span className={stl.lowerLvl}>70</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={hitpointsIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={miningIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
