import stl from "./NPCGrid.module.css";
import monsterList from "../../../../../../utils/monsterList";

const NPCGrid = () => {
  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span>Monster</span>
        <span>Member</span>
        <span>Hitpoints</span>
        <span>Kill</span>
      </div>
      <div className={stl.resultGrid}>
        {monsterList.map((monster) => {
          return (
            <>
              <div className={stl.row}>
                <span className={stl.rowItem}>{monster.monster}</span>
                <span className={stl.rowItem}>
                  {monster.member ? "Yes" : "No"}
                </span>
                <span className={stl.rowItem}>{monster.combat}</span>
                <span className={stl.rowItem}>{monster.hp}</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NPCGrid;
