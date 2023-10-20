import stl from "./SkillsGrid.module.css";

import attackIcon from "../../../../assets/skillicons/Attack.webp";
import hitpointsIcon from "../../../../assets/skillicons/Hitpoints.webp";
import miningIcon from "../../../../assets/skillicons/Mining.webp";
import strengthIcon from "../../../../assets/skillicons/Strength.png";
import agilityIcon from "../../../../assets/skillicons/Agility.webp";
import smithingIcon from "../../../../assets/skillicons/Smithing.webp";
import defenceIcon from "../../../../assets/skillicons/Defence.webp";
import herbloreIcon from "../../../../assets/skillicons/Herblore.webp";
import fishingIcon from "../../../../assets/skillicons/Fishing.webp";
import rangedIcon from "../../../../assets/skillicons/Ranged.webp";
import thievingIcon from "../../../../assets/skillicons/Thieving.webp";
import cookingIcon from "../../../../assets/skillicons/Cooking.webp";
import prayerIcon from "../../../../assets/skillicons/Prayer.webp";
import craftingIcon from "../../../../assets/skillicons/Crafting.webp";
import firemakingIcon from "../../../../assets/skillicons/Firemaking.png";
import magicIcon from "../../../../assets/skillicons/Magic.webp";
import fletchingIcon from "../../../../assets/skillicons/Fletching.webp";
import woodcuttingIcon from "../../../../assets/skillicons/Woodcutting.webp";
import runecraftingIcon from "../../../../assets/skillicons/Runecraft.webp";
import slayerIcon from "../../../../assets/skillicons/Slayer.png";
import farmingIcon from "../../../../assets/skillicons/Farming.webp";
import constructionIcon from "../../../../assets/skillicons/Construction.webp";
import hunterIcon from "../../../../assets/skillicons/Hunter.webp";
import borderImg from "../../../../assets/skillicons/Border.png";

const SkillsGrid = () => {
  return (
    <div className={stl.renderedSkills}>
      <div className={`${stl.skillRow} ${stl.row1}`}>
        <div className={stl.skillLvl}>
          <img src={attackIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>70</span>
            <span className={stl.lowerLvl}>70</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={hitpointsIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={miningIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row2}`}>
        <div className={stl.skillLvl}>
          <img src={strengthIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>70</span>
            <span className={stl.lowerLvl}>70</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={agilityIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={smithingIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row3}`}>
        <div className={stl.skillLvl}>
          <img src={defenceIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>70</span>
            <span className={stl.lowerLvl}>70</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={herbloreIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={fishingIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row4}`}>
        <div className={stl.skillLvl}>
          <img src={rangedIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>70</span>
            <span className={stl.lowerLvl}>70</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={thievingIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={cookingIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row5}`}>
        <div className={stl.skillLvl}>
          <img src={prayerIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>70</span>
            <span className={stl.lowerLvl}>70</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={craftingIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img
            src={firemakingIcon}
            alt="Attack Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row6}`}>
        <div className={stl.skillLvl}>
          <img src={magicIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>70</span>
            <span className={stl.lowerLvl}>70</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={fletchingIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img
            src={woodcuttingIcon}
            alt="Attack Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row7}`}>
        <div className={stl.skillLvl}>
          <img
            src={runecraftingIcon}
            alt="Attack Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>70</span>
            <span className={stl.lowerLvl}>70</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={slayerIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={farmingIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row8}`}>
        <div className={stl.skillLvl}>
          <img
            src={constructionIcon}
            alt="Attack Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>70</span>
            <span className={stl.lowerLvl}>70</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <img src={hunterIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>99</span>
            <span className={stl.lowerLvl}>99</span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <span className={stl.totalLvl}>
            Total level:
            <br /> 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
