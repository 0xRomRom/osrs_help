import stl from "./UserBox.module.css";
import lvl1def from "../../../../assets/characters/1def.png";
import { useState, useEffect } from "react";

const UserBox = (props) => {
  const [cmbLvl, setCmbLvl] = useState(null);

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
    const step4 = step2 + step3;

    setCmbLvl(step4.toFixed(1));
  };

  //pure 77.5 cmb
  //main 108.3 cmb

  useEffect(() => {
    calculateCombatLevel();
  }, [props.skills]);

  return (
    <div className={stl.userbox}>
      <div className={stl.leftblock}>
        <span className={stl.username}>King Rom II</span>
        <img
          src={lvl1def}
          alt="Oldschool Runescape Player"
          className={stl.playerImg}
        />
        <span className={stl.combatlvl}>Combat Lvl: {cmbLvl}</span>
      </div>
    </div>
  );
};

export default UserBox;
