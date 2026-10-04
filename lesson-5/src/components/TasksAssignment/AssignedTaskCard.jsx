function AssignedTaskCard({ task, onDelete }) {
  const onTaskDelete = () => {
    onDelete(task.id)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>{task.title}</div>
      <button onClick={onTaskDelete}>Delete</button>
    </div>
  )
}

export default AssignedTaskCard
