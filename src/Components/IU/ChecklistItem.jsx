/*import React from 'react'
import { useContextTask } from "../../Context/Context"

export const ChecklistItem = ({ task }) => {
  const { markTaskCompleted, deleteTask } = useContextTask();

  return (
    <div className="flex items-center justify-between border rounded p-3 mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => markTaskCompleted(task.id)}
          className="h-5 w-5 mr-3"
        />
        <div className={task.completed ? "line-through text-gray-500" : ""}>
          <h3 className="font-medium">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.description}</p>
        </div>
      </div>
      <button 
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        Eliminar
      </button>
    </div>
  )
}
  */