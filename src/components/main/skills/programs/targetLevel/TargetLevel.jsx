import stl from "./TargetLevel.module.css";
import { osrsXpTable } from "../../../../../utils/playerStats";
import { useRef, useEffect, useState } from "react";

const TargetLevel = (props) => {
  const sliderRef = useRef(null);
  const [currentSliderValue, setCurrentSliderValue] = useState(
    +props.currentLvl + 1
  );

  useEffect(() => {
    // Ensure that the ref is defined before attaching an event listener
    if (sliderRef.current) {
      sliderRef.current.addEventListener("input", handleSliderChange);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("input", handleSliderChange);
      }
    };
  }, []);

  const handleSliderChange = (event) => {
    const newValue = +event.target.value;
    setCurrentSliderValue(newValue);
  };

  const calculateExpUntilNextLevel = () => {
    const skill = props.skillName;
    const currentLvl = +props.currentLvl;
    const currentExp = +props.currentExp[skill];
    const nextLevelStartExp = osrsXpTable[currentLvl + 1];

    const remainder = nextLevelStartExp - currentExp;
    return remainder;
  };

  const remainder = calculateExpUntilNextLevel();

  return (
    <div className={stl.modal}>
      <div className={stl.levelRow}>
        <div className={stl.targetRow}>
          <span className={stl.targetlvl}>Target level:</span>
          <span className={stl.wantedLvl}>{currentSliderValue}</span>
        </div>
        <div className={stl.remainderRow}>
          <span className={stl.requiredExp}>
            {remainder.toLocaleString()} {""}EXP Remaining
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
  );
};

export default TargetLevel;
