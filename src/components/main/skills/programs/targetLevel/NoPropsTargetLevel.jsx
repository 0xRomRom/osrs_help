import stl from "./NoPropsTargetLevel.module.css";
import { osrsXpTable } from "../../../../../utils/playerStats";
import { useRef, useEffect, useState } from "react";

const NoPropsTargetLevel = () => {
  const sliderRef = useRef(2);
  const [remainingExp, setRemainingExp] = useState(83);
  const [currentSliderValue, setCurrentSliderValue] = useState(2);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("input", handleSliderChange);
    }

    calculateExpUntilNextLevel();
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("input", handleSliderChange);
      }
    };
  }, []);

  const handleSliderChange = (event) => {
    const newValue = +event.target.value;
    setCurrentSliderValue(newValue);
    setCurrentLevel(newValue);
    updateExpToGo(newValue);
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
            min={2}
            max={99}
            ref={sliderRef}
          ></input>
          <div className={stl.valuerow}>
            <span className={`${stl.sliderValue} ${stl.minval}`}>
              {currentLevel}
            </span>
            <span className={`${stl.sliderValue} ${stl.maxval}`}>99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPropsTargetLevel;
