import stl from "./AttackCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import attackIcon from "../../../../../assets/skillicons/Attack.webp";

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
      </div>
    </div>
  );
};

export default AttackCalculator;
