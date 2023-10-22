import stl from "./TargetLevel.module.css";

const TargetLevel = () => {
  return (
    <div className={stl.modal}>
      <div className={stl.levelRow}>
        <div className={stl.targetRow}>
          <span className={stl.targetlvl}>Target level:</span>
          <span className={stl.wantedLvl}>76</span>
        </div>
        <div className={stl.remainderRow}>
          <span className={stl.requiredExp}>331,411 EXP Remaining</span>
        </div>
      </div>
      <div className={stl.sliderBox}>
        <input type="range" className={stl.rangeSlider}></input>
        <div className={stl.valuerow}>
          <span className={`${stl.sliderValue} ${stl.minval}`}>76</span>
          <span className={`${stl.sliderValue} ${stl.maxval}`}>88</span>
        </div>
      </div>
    </div>
  );
};

export default TargetLevel;
