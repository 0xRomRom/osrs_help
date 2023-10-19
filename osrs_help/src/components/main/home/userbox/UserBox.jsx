import stl from "./UserBox.module.css";
import lvl1def from "../../../../assets/characters/1def.png";

const UserBox = () => {
  return (
    <div className={stl.userbox}>
      <div className={stl.leftblock}>
        <span className={stl.username}>King Rom II</span>
        <img
          src={lvl1def}
          alt="Oldschool Runescape Player"
          className={stl.playerImg}
        />
      </div>
    </div>
  );
};

export default UserBox;
