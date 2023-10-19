import stl from "./UserBox.module.css";
import lvl1def from "../../../../assets/characters/1def.png";
import { useState, useEffect } from "react";

const UserBox = (props) => {
  const [cmbLvl, setCmbLvl] = useState(null);

  const calculateCombatLevel = () => {
    const skills = props.skills;
    const attack = +skills["attack"];
    const strength = +skills["strength"];
    const defence = +skills["defence"];
    const hitpoints = +skills["hitpoints"];
    const ranged = +skills["ranged"];
    const prayer = +skills["prayer"];
    const magic = +skills["magic"];

    const maxMelee = Math.max(attack + strength, 2 * magic, 2 * ranged, prayer);
    const combatLevel = maxMelee / 4 + defence / 2 + hitpoints / 4;
    // return Math.floor(combatLevel);

    setCmbLvl(Math.floor(combatLevel));
  };

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
