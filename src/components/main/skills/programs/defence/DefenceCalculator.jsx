import stl from "./DefenceCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import defenceIcon from "../../../../../assets/skillicons/Defence.webp";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";

const DefenceCalculator = (props) => {
  const handleMenuSwitch = () => {
    props.setSkillClicked(false);
    props.setClickedSkill("");
  };

  const handleUserReset = () => {
    props.setSkills(null);
    props.setPlayerName(null);
    props.setSkillsExp(null);
  };

  const arePropsDefined =
    props &&
    props.playerName &&
    props.skills &&
    props.skills["attack"] &&
    props.skillsExp;

  return (
    <div className={stl.modal}>
      <div className={stl.topBar}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={stl.backArrow}
          onClick={handleMenuSwitch}
        />
        <img src={defenceIcon} alt="Defence Level" className={stl.skillImg} />
        <span className={stl.skillTitle}>Defence</span>
        {arePropsDefined ? (
          <div className={stl.userStatsBox}>
            <div className={stl.userBlock}>
              <span className={stl.playerName}>{props?.playerName}</span>
              <span className={stl.playerLvl}>
                Level {props?.skills["defence"]}
              </span>
            </div>
            <div className={stl.remainderBlock}>
              <span className={stl.expToGo}>Xp till level</span>
              <span className={stl.remaining}>
                <CalculateRemainderExp
                  skillname={"defence"}
                  currentLvl={props?.skills["defence"]}
                  currentExp={props?.skillsExp}
                  className={stl.remainder}
                />
              </span>
            </div>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={stl.trashcan}
              onClick={handleUserReset}
            />
          </div>
        ) : (
          <FetchUsername
            setSkills={props.setSkills}
            setSkillsExp={props.setSkillsExp}
            setPlayerName={props.setPlayerName}
          />
        )}
      </div>
    </div>
  );
};

export default DefenceCalculator;
