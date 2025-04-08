import React from 'react'
import { useContextTask } from "../../Context/Context"
import { ChecklistItem } from "../IU/ChecklistItem"

export const List = () => {
  const { task, setTask, filter } = useContextTask();

  // 🔍 Filtrado local según el filtro actual
  const displayTasks = task.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true; // "all"
  });

  // ✅ Función para alternar el estado de completado
  const toggleTask = (id) => {
    const updatedTasks = task.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTask(updatedTasks);
  };

  return (
    <section className='space-y-3 flex flex-col p-4 border-2 rounded-md mb-3 border-blue-300'>
      {displayTasks.length === 0 ? (
        <p className="text-center text-gray-500">There are no tasks to display.</p>
      ) : (
        <ul className="w-full">
          {displayTasks.map((task) => (
            <ChecklistItem key={task.id} task={task} toggleTask={toggleTask} />
          ))}
        </ul>
      )}
    </section>
  )
}
