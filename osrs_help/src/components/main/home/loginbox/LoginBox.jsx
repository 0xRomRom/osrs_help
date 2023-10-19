import { useRef } from "react";
import stl from "./LoginBox.module.css";

const LoginBox = (props) => {
  const usernameRef = useRef(null);

  const fetchUserData = async () => {
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
      </form>
      <button className={stl.cta} onClick={fetchUserData}>
        Get stats
      </button>
    </div>
  );
};

export default LoginBox;
