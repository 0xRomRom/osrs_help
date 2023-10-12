import stl from "./App.module.css";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div className={stl.app}>
      <Nav />
      <Main />
    </div>
  );
};

export default App;
