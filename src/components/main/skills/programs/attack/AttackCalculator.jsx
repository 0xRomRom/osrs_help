import stl from "./AttackCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import attackIcon from "../../../../../assets/skillicons/Attack.webp";
import CalculateRemainderExp from "./../../../../../utils/calculateRemainderExp";

const AttackCalculator = (props) => {
  const handleMenuSwitch = () => {
    props.setSkillClicked(false);
    props.setClickedSkill("");
  };

  return (
    <div className={stl.modal}>
      <div className={stl.topBar}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={stl.backArrow}
          onClick={handleMenuSwitch}
        />
        <img src={attackIcon} alt="Attack Level" className={stl.skillImg} />
        <span className={stl.skillTitle}>Attack</span>
        <div className={stl.userStatsBox}>
          <div className={stl.userBlock}>
            <span className={stl.playerName}>{props.playerName}</span>
            <span className={stl.playerLvl}>
              Level {props.skills["attack"]}
            </span>
          </div>
          <div className={stl.remainderBlock}>
            <span className={stl.expToGo}>Xp till level</span>
            <span className={stl.remaining}>
              <CalculateRemainderExp
                skillname={"attack"}
                currentLvl={props.skills["attack"]}
                currentExp={props.skillsExp}
                className={stl.remainder}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttackCalculator;
