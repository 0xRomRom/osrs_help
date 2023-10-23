import stl from "./NoPropsTargetLevel.module.css";
import { osrsXpTable } from "../../../../../utils/playerStats";
import { useRef, useEffect, useState } from "react";

const NoPropsTargetLevel = () => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [selectedLvl, setSelectedLvl] = useState(1);
  const [targetLevel, setTargetLevel] = useState(2);
  const [currentExp, setCurrentExp] = useState(0);

  useEffect(() => {
    calcXpToGo();
  }, [targetLevel]);

  const handleNumbersOnly = (e) => {
    const key = e.key;
    if (
      !/^[0-9]$/.test(key) &&
      !["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"].includes(key)
    ) {
      e.preventDefault();
    }
  };

  const updateSelectedLvl = (e) => {
    const newValue = e.target.value;

    if (
      newValue === "" ||
      (parseInt(newValue) > 0 && parseInt(newValue) <= 98)
    ) {
      setSelectedLvl(parseInt(newValue));
      setTargetLevel(parseInt(newValue) + 1);
      setCurrentExp(+osrsXpTable[parseInt(newValue)]);
    }
  };

  const updateCurrentExp = (e) => {
    const newValue = e.target.value;
    const currentMinExp = osrsXpTable[selectedLvl];
    const currentMaxExp = osrsXpTable[selectedLvl + 1];

    const result = currentMaxExp - newValue;
    console.log(result);
  };

  const calcXpToGo = () => {
    if (selectedLvl === "") return;
    if (selectedLvl === 99) {
      setTargetLevel(99);
      return;
    }

    const currLevelExp = osrsXpTable[selectedLvl];
    const nextLevelExp = osrsXpTable[selectedLvl + 1];
    const expDiff = +nextLevelExp - +currLevelExp;

    setRemainingExp(expDiff);
  };

  return (
    <div className={stl.modal}>
      <div className={stl.userLvlBox}>
        <div className={stl.levelRow}>
          <div className={stl.targetRow}>
            <div className={stl.currLvlRow}>
              <span className={stl.targetlvl}>Current level:</span>
              <input
                type="text"
                className={stl.currentLvlInput}
                onKeyDown={handleNumbersOnly}
                onChange={updateSelectedLvl}
                value={selectedLvl || ""}
              />
            </div>
            {selectedLvl && (
              <div className={stl.xpDiv}>
                <span className={stl.toGoExp}>Exp:</span>
                <input
                  type="text"
                  className={stl.curExpInput}
                  value={currentExp}
                  onKeyDown={handleNumbersOnly}
                  onChange={updateCurrentExp}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={stl.userDefined}>
        <div className={stl.levelRow}>
          <div className={stl.targetRow}>
            <span className={stl.targetlvl}>
              Target level:{" "}
              <span className={stl.wantedLvl}>{targetLevel || ""}</span>
            </span>
          </div>
          <div className={stl.remainderRow}>
            <span className={stl.requiredExp}>
              {remainingExp ? remainingExp.toLocaleString() : ""} {""}EXP
              Remaining
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPropsTargetLevel;
