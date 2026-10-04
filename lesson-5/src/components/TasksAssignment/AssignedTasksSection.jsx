import WorkerCard from "./WorkerCard";

function AssignedTasksSection({ tasksList, workersList, onDelete }) {
  const data = {
    // 1:{
    //     worker,
    //     tasks:[{}]
    // },
    // 4:{
    //     worker,
    //     tasks:[{},{}]
    // },
  };
  const getWorkerById = (workerId) =>
    workersList.find((worker) => worker.id == workerId);

  for (const task of tasksList) {
    if (task.workerId) {
      if (task.workerId in data) data[task.workerId].tasks.push(task);
      else
        data[task.workerId] = {
          worker: getWorkerById(task.workerId),
          tasks: [task],
        };
    }
  }

  return (
    <div>
      <h2>Призначені задачі</h2>
      {Object.keys(data).map((workerId) => (
        <WorkerCard
          key={workerId}
          worker={data[workerId].worker}
          workerTaskList={data[workerId].tasks}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default AssignedTasksSection;
