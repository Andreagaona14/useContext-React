/*import React from 'react'
import { useContextTask } from "../../Context/Context"
import { ChecklistItem } from "../IU/ChecklistItem"

export const List = () => {
  const { task, filter, filteredTasks } = useContextTask();
  
  // Ahora podemos usar directamente filteredTasks del contexto
  // O mantener tu lógica de filtrado local si prefieres
  const displayTasks = filteredTasks || (() => {
    switch (filter) {
      case "completed":
        return task.filter((task) => task.completed);
      case "pending":
        return task.filter((task) => !task.completed);
      default:
        return task;
    }
  })();

  return (
    <section className='space-y-3 flex flex-col p-4 border-2 rounded-md mb-3 border-blue-300'>
      {displayTasks.length === 0 ? (
        <p className="text-center text-gray-500">There are no tasks to display.</p>
      ) : (
        <ul className="w-full">
          {displayTasks.map((task) => (
            <ChecklistItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </section>
  )
}
  */