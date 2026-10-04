import { useEffect, useState } from "react";
import TasksAssignmentForm from "./TasksAssignmentForm";
import AssignedTasksSection from "./AssignedTasksSection";

function TaskManager({ workersList, tasksList }) {
  const [tasksData, setTasksData] = useState(() =>
    JSON.parse(JSON.stringify(tasksList)),
  );
  useEffect(() => {
    console.log(tasksData);
  });
  const onSelect = (taskId, selectedWorkerId) => {
    setTasksData((prevTasksData) =>
      prevTasksData.map((task) =>
        task.id === taskId
          ? { ...task, workerId: Number(selectedWorkerId) }
          : task,
      ),
    );
  };
  const onDelete = (taskId) => {
    setTasksData((prevTasksData) =>
      prevTasksData.map((task) =>
        task.id === taskId ? { ...task, workerId: null } : task,
      ),
    );
  };
  return (
    <div>
      <TasksAssignmentForm
        workersList={workersList}
        tasksList={tasksData}
        onSelect={onSelect}
      />
      <AssignedTasksSection
        tasksList={tasksData}
        workersList={workersList}
        onDelete={onDelete}
      />
    </div>
  );
}

export default TaskManager;
