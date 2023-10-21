import stl from "./SkillsTab.module.css";

import attackIcon from "../../../assets/skillicons/Attack.webp";
import hitpointsIcon from "../../../assets/skillicons/Hitpoints.webp";
import miningIcon from "../../../assets/skillicons/Mining.webp";
import strengthIcon from "../../../assets/skillicons/Strength.png";
import agilityIcon from "../../../assets/skillicons/Agility.webp";
import smithingIcon from "../../../assets/skillicons/Smithing.webp";
import defenceIcon from "../../../assets/skillicons/Defence.webp";
import herbloreIcon from "../../../assets/skillicons/Herblore.webp";
import fishingIcon from "../../../assets/skillicons/Fishing.webp";
import rangedIcon from "../../../assets/skillicons/Ranged.webp";
import thievingIcon from "../../../assets/skillicons/Thieving.webp";
import cookingIcon from "../../../assets/skillicons/Cooking.webp";
import prayerIcon from "../../../assets/skillicons/Prayer.webp";
import craftingIcon from "../../../assets/skillicons/Crafting.webp";
import firemakingIcon from "../../../assets/skillicons/Firemaking.png";
import magicIcon from "../../../assets/skillicons/Magic.webp";
import fletchingIcon from "../../../assets/skillicons/Fletching.webp";
import woodcuttingIcon from "../../../assets/skillicons/Woodcutting.webp";
import runecraftingIcon from "../../../assets/skillicons/Runecraft.webp";
import slayerIcon from "../../../assets/skillicons/Slayer.png";
import farmingIcon from "../../../assets/skillicons/Farming.webp";
import constructionIcon from "../../../assets/skillicons/Construction.webp";
import hunterIcon from "../../../assets/skillicons/Hunter.webp";
import borderImg from "../../../assets/skillicons/Border.png";

const SkillsTab = () => {
  return (
    <div className={stl.modal}>
      <div className={stl.modalInner}>
        <div className={stl.skill}>
          <img src={attackIcon} alt="Attack Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Attack</span>
        </div>
        <div className={stl.skill}>
          <img src={attackIcon} alt="Attack Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Defence</span>
        </div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
        <div className={stl.skill}></div>
      </div>
    </div>
  );
};

export default SkillsTab;
