import { useRef } from "react";
import stl from "./LoginBox.module.css";
import playerStats from "../../../../utils/playerStats.js";

const LoginBox = (props) => {
  const usernameRef = useRef(null);

  const updateSkills = (data) => {
    let currentStats = {};
    const skillsArray = data.split(/\n/);

    // console.log(skillsArray);
    let filteredSkills = [];
    for (let i = 0; i < 23; i++) {
      const value = skillsArray[i].split(",")[1];
      filteredSkills.push(value);
    }
    // console.log(filteredSkills);

    for (let i = 0; i < 23; i++) {
      currentStats[playerStats[i]] = filteredSkills[i];
    }

    // console.log(currentStats);
    props.setSkills(currentStats);
  };

  const updateSkillsExp = (data) => {
    let currentStats = {};
    const skillsArray = data.split(/\n/);

    // console.log(skillsArray);
    let filteredSkills = [];
    for (let i = 0; i < 23; i++) {
      const value = skillsArray[i].split(",")[2];
      filteredSkills.push(value);
    }
    // console.log(filteredSkills);

    for (let i = 0; i < 23; i++) {
      currentStats[playerStats[i]] = filteredSkills[i];
    }

    // console.log(currentStats);
    props.setSkillsExp(currentStats);
  };

  const fetchUserData = async (e) => {
    e.preventDefault();

    const user = usernameRef.current.value;
    if (!user) return;
    const filteredUser = user.replaceAll(" ", "_");
    const obj = { user: filteredUser };
    try {
      const fetcher = await fetch(
        "http://localhost:9000/.netlify/functions/api",
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
    <div className={stl.userbox}>
      <form>
        <label>
          Username:
          <input type="text" className={stl.nameinput} ref={usernameRef} />
        </label>
        <button className={stl.cta} onClick={fetchUserData}>
          Get stats
        </button>
      </form>
    </div>
  );
};

export default LoginBox;
