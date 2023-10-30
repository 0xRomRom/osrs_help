import stl from "./TargetLevel.module.css";
import { osrsXpTable } from "../../../../../utils/playerStats";
import { useCallback, useEffect, useState } from "react";

const TargetLevel = ({
  skills,
  skillsExp,
  skillName,
  currentLvl,
  currentExp,
  setRemainingExp,
  remainingExp,
}) => {
  const [currentSliderValue, setCurrentSliderValue] = useState(+currentLvl + 1);

  const handleSliderChange = (e) => {
    const value = +e.target.value;
    setCurrentSliderValue(() => value);
    updateExpToGo(value);
  };

  const updateExpToGo = useCallback(
    (newValue) => {
      const selectedLevel = newValue;
      const currentExp = skillsExp[skillName];
      const xpRequiredForSelectedSkill = osrsXpTable[+selectedLevel];

      const expDifference = +xpRequiredForSelectedSkill - +currentExp;
      console.log(expDifference);
      setRemainingExp(expDifference);
    },
    [setRemainingExp, skillsExp, skillName]
  );

  useEffect(() => {
    updateExpToGo(currentSliderValue);
  }, [updateExpToGo, currentSliderValue]);

  const propsDefined = skills && skills[skillName] && skillsExp;

  return (
    <div className={stl.modal}>
      {propsDefined ? (
        <div className={stl.userDefined}>
          <div className={stl.levelRow}>
            <div className={stl.targetRow}>
              <span className={stl.targetlvl}>Target level:</span>
              <span className={stl.wantedLvl}>{currentSliderValue}</span>
            </div>
            <div className={stl.remainderRow}>
              <span className={stl.requiredExp}>
                {isNaN(remainingExp) ? "?" : remainingExp.toLocaleString()} {""}
                EXP Remaining
              </span>
            </div>
          </div>
          <div className={stl.sliderBox}>
            <input
              type="range"
              className={stl.rangeSlider}
              min={+currentLvl + 1}
              max={99}
              onChange={handleSliderChange}
            ></input>
            <div className={stl.valuerow}>
              <span className={`${stl.sliderValue} ${stl.minval}`}>
                {+currentLvl + 1}
              </span>
              <span className={`${stl.sliderValue} ${stl.maxval}`}>99</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TargetLevel;
