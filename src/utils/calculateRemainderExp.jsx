import { osrsXpTable } from "./playerStats";

const CalculateRemainderExp = (props) => {
  const calculateExpUntilNextLevel = () => {
    const skill = props.skillname;
    const currentLvl = +props.currentLvl;
    const currentExp = +props.currentExp[skill];
    const levelStartExp = osrsXpTable[currentLvl];

    const nextLevelStartExp = osrsXpTable[currentLvl + 1];

    const remainder = (nextLevelStartExp - currentExp).toLocaleString();
    return remainder;
  };

  const remainder = calculateExpUntilNextLevel();

  return <span>{remainder}</span>;
};

export default CalculateRemainderExp;
