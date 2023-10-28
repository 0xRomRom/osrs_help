import stl from "./NPCGrid.module.css";
import monsterList from "../../../../../../utils/monsterList";
import attackLogo from "../../../../../../assets/skillicons/Attack.webp";
import healthLogo from "../../../../../../assets/skillicons/Hitpoints.webp";
import slayerLogo from "../../../../../../assets/skillicons/Slayer.png";
import memberLogo from "../../../../../../assets/icons/Member.webp";

const NPCGrid = (props) => {
  const filteredMonsters = monsterList.filter((monster) =>
    monster.monster.toLowerCase().includes(props.searchState.toLowerCase())
  );
  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow}>
          <img src={attackLogo} alt="Attack Logo" className={stl.miniLogo} />{" "}
          Monster
        </span>
        <span>
          <img src={memberLogo} alt="Member Logo" className={stl.miniLogo} />{" "}
          Member
        </span>
        <span>
          <img src={healthLogo} alt="Health Logo" className={stl.miniLogo} />{" "}
          Hitpoints
        </span>
        <span>
          <img src={slayerLogo} alt="Slayer Logo" className={stl.miniLogo} /> To
          Go
        </span>
      </div>
      <div className={stl.resultGrid}>
        {filteredMonsters.map((monster) => {
          return (
            <>
              <div className={stl.row}>
                <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                  {monster.monster}
                </span>
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
