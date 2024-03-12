import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Welcome />
      <MyNav />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
