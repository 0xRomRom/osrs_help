import stl from "./TargetLevel.module.css";
import { osrsXpTable } from "../../../../../utils/playerStats";
import { useRef, useEffect, useState, useCallback } from "react";

const TargetLevel = (props) => {
  const sliderRef = useRef(null);
  const [remainingExp, setRemainingExp] = useState(0);
  const [currentSliderValue, setCurrentSliderValue] = useState(
    +props.currentLvl + 1
  );

  const updateExpToGo = useCallback(
    (newValue) => {
      const selectedLevel = newValue;
      const currentExp = props.skillsExp[props.skillName];
      const xpRequiredForSelectedSkill = osrsXpTable[selectedLevel];

      const expDifference = xpRequiredForSelectedSkill - currentExp;
      setRemainingExp(expDifference);
    },
    [props.skillsExp, props.skillName]
  );

  useEffect(() => {
    const sliderElement = sliderRef.current;

    const calculateExpUntilNextLevel = () => {
      const skill = props.skillName;
      const currentLvl = +props.currentLvl;
      const currentExp = +props.currentExp[skill];
      const nextLevelStartExp = osrsXpTable[currentLvl + 1];

      const remainder = nextLevelStartExp - currentExp;
      setRemainingExp(remainder);
    };

    const handleSliderChange = (event) => {
      const newValue = +event.target.value;
      setCurrentSliderValue(newValue);
      updateExpToGo(newValue);
    };

    if (sliderElement) {
      sliderElement.addEventListener("input", handleSliderChange);
    }

    calculateExpUntilNextLevel();

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("input", handleSliderChange);
      }
    };
  }, [updateExpToGo, props.skillName, props.currentLvl, props.currentExp]);

  const propsDefined =
    props && props.skills && props.skills[props.skillName] && props.skillsExp;

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
              ref={sliderRef}
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
