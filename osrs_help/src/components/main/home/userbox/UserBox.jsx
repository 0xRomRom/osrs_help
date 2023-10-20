import stl from "./UserBox.module.css";
import lvl1def from "../../../../assets/characters/1def.png";
import lvl70def from "../../../../assets/characters/70def.png";
import lvl99def from "../../../../assets/characters/99def.png";
import skillsGrid from "../../../../assets/wallpapers/Skillsgrid.png";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import attackIcon from "../../../../assets/skillicons/Attack.webp";

const UserBox = (props) => {
  const [cmbLvl, setCmbLvl] = useState(null);
  const [imageState, setImageState] = useState(null);

  const calculateCombatLevel = () => {
    console.log(props.skills);
    const skills = props.skills;
    const attack = +skills["attack"];
    const strength = +skills["strength"];
    const defence = +skills["defence"];
    const hitpoints = +skills["hitpoints"];
    const ranged = +skills["ranged"];
    const prayer = +skills["prayer"];
    const magic = +skills["magic"];

    const step1 = Math.floor(prayer / 2);
    const step2 = (hitpoints + defence + step1) / 4;
    const step3 = (strength + attack) * 0.325;
    const cmb = (step2 + step3).toFixed(1);
    if (defence >= 1 && defence < 70) {
      setImageState(lvl1def);
    } else if (defence >= 70 && defence < 99) {
      setImageState(lvl70def);
    } else {
      setImageState(lvl99def);
    }

    setCmbLvl(cmb);
  };

  useEffect(() => {
    calculateCombatLevel();
  }, [props.skills]);

  const handleMenuSwitch = () => {
    props.switchTab(false);
  };

  return (
    <div className={stl.userbox}>
      <div className={stl.leftblock}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={stl.backArrow}
          onClick={handleMenuSwitch}
        />
        <span className={stl.username}>{props.playerName}</span>
        <img
          src={imageState}
          alt="Oldschool Runescape Player"
          className={stl.playerImg}
        />
        <span className={stl.combatlvl}>Combat Lvl: {cmbLvl}</span>
      </div>
      <div className={stl.rightblock}>
        <div className={stl.renderedSkills}>
          <div className={`${stl.skillRow} ${stl.row1}`}>
            <div className={stl.skillLvl}>
              <img
                src={attackIcon}
                alt="Attack Level"
                className={stl.lvlIcon}
              />
              <div className={stl.lvlDiv}>
                <span>70</span>
                <span>70</span>
              </div>
            </div>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
          </div>
          {/* <div className={`${stl.skillRow} ${stl.row2}`}>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
          </div>
          <div className={`${stl.skillRow} ${stl.row3}`}>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
          </div>
          <div className={`${stl.skillRow} ${stl.row4}`}>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
          </div>
          <div className={`${stl.skillRow} ${stl.row5}`}>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
          </div>
          <div className={`${stl.skillRow} ${stl.row6}`}>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
          </div>
          <div className={`${stl.skillRow} ${stl.row7}`}>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
          </div>
          <div className={`${stl.skillRow} ${stl.row8}`}>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
            <div className={stl.skillLvl}></div>
          </div> */}
        </div>
        <img
          src={skillsGrid}
          alt="Skills background"
          className={stl.skillsGrid}
        />
      </div>
    </div>
  );
};

export default UserBox;
