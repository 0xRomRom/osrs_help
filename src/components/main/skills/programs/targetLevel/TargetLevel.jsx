import stl from "./TargetLevel.module.css";
import { osrsXpTable } from "../../../../../utils/playerStats";
import { useEffect, useState } from "react";

const TargetLevel = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [currentSliderValue, setCurrentSliderValue] = useState(
    +props.currentLvl + 1
  );

  useEffect(() => {
    console.log(currentSliderValue);
  }, [currentSliderValue]);

  const handleSliderChange = (e) => {
    setCurrentSliderValue(() => +e.target.value);
    console.log(currentSliderValue);
    updateExpToGo(+e.target.value);
  };

  const updateExpToGo = (newValue) => {
    const selectedLevel = newValue;
    const currentExp = props.skillsExp[props.skillName];
    const xpRequiredForSelectedSkill = osrsXpTable[selectedLevel];

    const expDifference = xpRequiredForSelectedSkill - currentExp;
    setRemainingExp(expDifference);
    props.setRemainderExp(expDifference);
  };

  const propsDefined =
    props && props.skills && props.skills[props.skillName] && props.skillsExp;

  return (
    <div className={stl.modal}>
      {propsDefined ? (
        <div className={stl.userDefined}>
          <div className={stl.levelRow}>
            <div className={stl.targetRow}>
              <span className={stl.targetlvl}>Target level:</span>
              <span className={stl.wantedLvl}>{currentSliderValue + 1}</span>
            </div>
            <div className={stl.remainderRow}>
              <span className={stl.requiredExp}>
                {remainingExp.toLocaleString()} {""}EXP Remaining
              </span>
            </div>
          </div>
          <div className={stl.sliderBox}>
            <input
              type="range"
              className={stl.rangeSlider}
              min={+props.currentLvl + 1}
              max={99}
              // ref={sliderRef}
              onChange={handleSliderChange}
            ></input>
            <div className={stl.valuerow}>
              <span className={`${stl.sliderValue} ${stl.minval}`}>
                {+props.currentLvl + 1}
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
