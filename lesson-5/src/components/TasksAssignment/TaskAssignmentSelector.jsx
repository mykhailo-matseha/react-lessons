import { useEffect, useState } from "react";

function TaskAssignmentSelector({ task, workersList, onSelect }) {
  const [workerId, setWorkerId] = useState(task.workerId ?? "");
  const onWorkerSelect = (e) => {
    const workerId = e.target.value;
    setWorkerId(e.target.value);
    onSelect(task.id, workerId);
  };

  useEffect(() => {
    setWorkerId(task.workerId ?? "");
  }, [task?.workerId]);

  return (
    <div>
      <label>
        {task.title}
        <select value={workerId} onChange={onWorkerSelect}>
          <option value="">Виберіть виконавця</option>
          {workersList.map((worker) => (
            <option key={worker.id} value={worker.id}>
              {worker.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default TaskAssignmentSelector;
