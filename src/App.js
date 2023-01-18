import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSec from "./components/RightSec";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <RightSec />
    </div>
  );
}

export default App;
