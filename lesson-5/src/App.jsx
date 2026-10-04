import "./App.css";
import TaskManager from "./components/TasksAssignment/TaskManager";
import Storage from "./components/Storage";
import { workersList, tasksList } from "./data/6_tasks_devider";
import { products, departments } from "./data/storageData";
function App() {
  return (
    <>
      <div>
        <TaskManager tasksList={tasksList} workersList={workersList} />
      </div>
      <br />
      <hr />
      <br />

      <div>
        <Storage products={products} departments={departments} />
      </div>
    </>
  );
}

export default App;
