import Auth from "./components/Auth/Auth";
import "./App.scss";
import Airlines from "./components/AirLines/Airlines";
import English from "./components/English/English";
import SalaryList from "./components/SalaryList/SalaryList";
import Dishes from "./components/Dishes/Dishes";
function App() {
  return (
    <div className="main-container">
      <div className="task-wrapper">
        <h3>Task 1</h3>
        <Auth />
      </div>
      <div className="task-wrapper">
        <h3>Task 2</h3>
        <Airlines />
      </div>
      <div className="task-wrapper">
        <h3>Task 3</h3>
        <English />
      </div>
      <div className="task-wrapper">
        <h3>Task 4</h3>
        <SalaryList />
      </div>
      <div className="task-wrapper">
        <h3>Task 4</h3>
        <Dishes />
      </div>
    </div>
  );
}

export default App;
