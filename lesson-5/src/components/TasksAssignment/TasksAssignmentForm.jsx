import TaskAssignmentSelector from "./TaskAssignmentSelector";

function TasksAssignmentForm({
  tasksList,
  workersList,
  onSelect,
  selectsToClear,
  setSelectsToClear,
}) {
  return (
    <div>
      <h1>Розподілювач задач</h1>
      <div>
        {tasksList.map((task) => (
          <TaskAssignmentSelector
            key={task.id}
            task={task}
            workersList={workersList}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default TasksAssignmentForm;
