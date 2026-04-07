import Navbar from "./Components/Navbar";
import "./App.css";
import Body from "./Components/Body";
import Teams from "./Components/Teams";
import Drivers from "./Components/Drivers";
import Champions from "./Components/Champions";

function App() {
  return (
    <div className="bg">
      <Navbar />
      <Body />
      <Teams />
      <Drivers />
      <Champions />
    </div>
  );
}

export default App;
