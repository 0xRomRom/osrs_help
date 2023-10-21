import stl from "./Main.module.css";
import Home from "./home/Home";

const Main = (props) => {
  return (
    <div className={stl.main}>{props.activeTab === "home" && <Home />}</div>
  );
};

export default Main;
