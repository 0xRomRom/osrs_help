import stl from "./FetchUsername.module.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { playerStats } from "../../../../../utils/playerStats";

const FetchUsername = (props) => {
  const nameRef = useRef(null);

  const updateSkills = (data) => {
    let currentStats = {};
    const skillsArray = data.split(/\n/);

    let filteredSkills = [];
    for (let i = 0; i < playerStats.length; i++) {
      const value = skillsArray[i].split(",")[1];
      filteredSkills.push(value);
    }

    for (let i = 0; i < playerStats.length; i++) {
      currentStats[playerStats[i]] = filteredSkills[i];
    }

    props.setSkills(currentStats);
  };

  const updateSkillsExp = (data) => {
    let currentStats = {};
    const skillsArray = data.split(/\n/);

    let filteredSkills = [];
    for (let i = 0; i < playerStats.length; i++) {
      const value = skillsArray[i].split(",")[2];
      filteredSkills.push(value);
    }

    for (let i = 0; i < playerStats.length; i++) {
      currentStats[playerStats[i]] = filteredSkills[i];
    }

    props.setSkillsExp(currentStats);
  };

  const handleNameRegister = async (e) => {
    const user = nameRef.current.value;
    e.preventDefault();

    if (!user || user === "") return;
    props.setPlayerName(user);
    const filteredUser = user.replaceAll(" ", "_");
    const obj = { user: filteredUser };
    try {
      const fetcher = await fetch(
        "https://osrshiscoreapi.netlify.app/.netlify/functions/api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      const data = await fetcher.json();

      updateSkills(data.result);
      updateSkillsExp(data.result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={stl.fetchUserBox}>
      <span className={stl.enterUsername}>Enter Username</span>
      <input type="text" className={stl.nameInput} ref={nameRef}></input>
      <button className={stl.usernameCta} onClick={handleNameRegister}>
        <FontAwesomeIcon icon={faArrowLeft} className={stl.goArrow} />
      </button>
    </div>
  );
};

export default FetchUsername;
