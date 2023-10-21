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
        <div className={`${stl.skill} ${stl.attack}`}>
          <img src={attackIcon} alt="Attack Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Attack</span>
        </div>
        <div className={`${stl.skill} ${stl.defence}`}>
          <img src={defenceIcon} alt="Attack Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Defence</span>
        </div>
        <div className={`${stl.skill} ${stl.strength}`}>
          <img src={strengthIcon} alt="Strength Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Strength</span>
        </div>
        <div className={`${stl.skill} ${stl.hitpoints}`}>
          <img
            src={hitpointsIcon}
            alt="Hitpoints Icon"
            className={stl.iconImg}
          />
          <span className={stl.skillName}>Hitpoints</span>
        </div>
        <div className={`${stl.skill} ${stl.ranged}`}>
          <img src={rangedIcon} alt="Ranged Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Ranged</span>
        </div>
        <div className={`${stl.skill} ${stl.prayer}`}>
          <img src={prayerIcon} alt="Prayer Icon" className={stl.iconImg} />
          <span className={`${stl.skillName} ${stl.black}`}>Prayer</span>
        </div>
        <div className={`${stl.skill} ${stl.magic}`}>
          <img src={magicIcon} alt="Magic Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Magic</span>
        </div>
        <div className={`${stl.skill} ${stl.cooking}`}>
          <img src={cookingIcon} alt="Cooking Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Cooking</span>
        </div>
        <div className={`${stl.skill} ${stl.woodcutting}`}>
          <img
            src={woodcuttingIcon}
            alt="Woodcutting Icon"
            className={stl.iconImg}
          />
          <span className={stl.skillName}>Woodcutting</span>
        </div>
        <div className={`${stl.skill} ${stl.fletching}`}>
          <img
            src={fletchingIcon}
            alt="Fletching Icon"
            className={stl.iconImg}
          />
          <span className={stl.skillName}>Fletching</span>
        </div>
        <div className={`${stl.skill} ${stl.fishing}`}>
          <img src={fishingIcon} alt="Fishing Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Fishing</span>
        </div>
        <div className={`${stl.skill} ${stl.firemaking}`}>
          <img
            src={firemakingIcon}
            alt="Firemaking Icon"
            className={stl.iconImg}
          />
          <span className={stl.skillName}>Firemaking</span>
        </div>
        <div className={`${stl.skill} ${stl.crafting}`}>
          <img src={craftingIcon} alt="Crafting Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Crafting</span>
        </div>
        <div className={`${stl.skill} ${stl.smithing}`}>
          <img src={smithingIcon} alt="Smithing Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Smithing</span>
        </div>
        <div className={`${stl.skill} ${stl.mining}`}>
          <img src={miningIcon} alt="Mining Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Mining</span>
        </div>
        <div className={`${stl.skill} ${stl.herblore}`}>
          <img src={herbloreIcon} alt="Herblore Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Herblore</span>
        </div>
        <div className={`${stl.skill} ${stl.agility}`}>
          <img src={agilityIcon} alt="Agility Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Agility</span>
        </div>
        <div className={`${stl.skill} ${stl.thieving}`}>
          <img src={thievingIcon} alt="Thieving Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Thieving</span>
        </div>
        <div className={`${stl.skill} ${stl.slayer}`}>
          <img src={slayerIcon} alt="Slayer Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Slayer</span>
        </div>
        <div className={`${stl.skill} ${stl.farming}`}>
          <img src={farmingIcon} alt="Farming Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Farming</span>
        </div>
        <div className={`${stl.skill} ${stl.runecrafting}`}>
          <img
            src={runecraftingIcon}
            alt="Runecrafting Icon"
            className={stl.iconImg}
          />
          <span className={stl.skillName}>Runecraft</span>
        </div>
        <div className={`${stl.skill} ${stl.hunter}`}>
          <img src={hunterIcon} alt="Hunter Icon" className={stl.iconImg} />
          <span className={stl.skillName}>Hunter</span>
        </div>
        <div className={`${stl.skill} ${stl.construction}`}>
          <img
            src={constructionIcon}
            alt="Construction Icon"
            className={stl.iconImg}
          />
          <span className={stl.skillName}>Construction</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
