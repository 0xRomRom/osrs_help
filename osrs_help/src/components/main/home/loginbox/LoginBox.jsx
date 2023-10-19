import { useRef } from "react";
import stl from "./LoginBox.module.css";
import playerStats from "../../../../utils/playerStats.js";

const LoginBox = (props) => {
  const usernameRef = useRef(null);

  const updateSkills = (data) => {
    let currentStats = {};
    const skillsArray = data.split(/\n/);
    console.log(skillsArray);
    let filteredSkills = [];
    for (let i = 0; i < 24; i++) {
      const value = skillsArray[i].split(",")[1];
      filteredSkills.push(value);
    }
    console.log(filteredSkills);
    // console.log(data);
    // console.log(skillsArray);
    // for (let i = 0; i < 72; i++) {
    //   if (skillsArray[i] > 1 && skillsArray[i] < 5000) {
    //     filteredSkills.push(skillsArray[i]);
    //   }
    // }
    console.log(filteredSkills);

    // for (let i = 0; i < 72; i++) {
    //   currentStats[playerStats[i]] = skillsArray[i];
    // }
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
      props.setSkills(data.result);
      updateSkills(data.result);
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
