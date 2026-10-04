import AssignedTaskCard from './AssignedTaskCard'

function WorkerCard({ worker, workerTaskList, onDelete }) {
  return (
    <div>
      <h2>Виконавець: {worker.name}</h2>
      <div>
        {workerTaskList.map((task) => (
          <AssignedTaskCard key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}

export default WorkerCard
