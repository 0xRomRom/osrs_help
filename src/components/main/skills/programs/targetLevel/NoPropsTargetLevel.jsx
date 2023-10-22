import stl from "./NoPropsTargetLevel.module.css";
import { osrsXpTable } from "../../../../../utils/playerStats";
import { useRef, useEffect, useState } from "react";

const NoPropsTargetLevel = () => {
  const [remainingExp, setRemainingExp] = useState(83);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);

  const currentLvlRef = useRef(currentLevel); // Initialize with the current level

  const updateCurrentLvl = () => {
    // Update the ref's current value with the new input value
    currentLvlRef.current = parseInt(currentLvlRef.current, 10); // Parse as an integer
    setCurrentLevel(currentLvlRef.current);
  };

  const calculateExpUntilNextLevel = () => {
    const currentLvl = currentLevel;
    const currExp = currentExp;
    const nextLevelStartExp = osrsXpTable[currentLvl + 1];

    const remainder = nextLevelStartExp - currExp;
    setRemainingExp(remainder);
  };

  const updateExpToGo = (newValue) => {
    const selectedLevel = newValue;
    const currExp = currentExp;
    const xpRequiredForSelectedSkill = osrsXpTable[selectedLevel];

    const expDifference = xpRequiredForSelectedSkill - currExp;
    setRemainingExp(expDifference);
  };

  return (
    <div className={stl.modal}>
      <div className={stl.userLvlBox}>
        <div className={stl.levelRow}>
          <div className={stl.targetRow}>
            <span className={stl.targetlvl}>Current level:</span>
            <input
              type="text"
              value={currentLvlRef.current}
              className={stl.currentLvlInput}
              onChange={updateCurrentLvl}
            />
          </div>
        </div>
      </div>
      <div className={stl.userDefined}>
        <div className={stl.levelRow}>
          <div className={stl.targetRow}>
            <span className={stl.targetlvl}>Target level:</span>
            <span className={stl.wantedLvl}>{99}</span>
          </div>
          <div className={stl.remainderRow}>
            <span className={stl.requiredExp}>
              {remainingExp.toLocaleString()} {""}EXP Remaining
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPropsTargetLevel;
