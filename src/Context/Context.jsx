/*import { createContext, useContext, useState } from "react";

const contextTask = createContext();

export const ProviderTask = ({ children }) => { 
  // Estados que se globalizan
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("all"); // Corregido de setFilters a setFilter

  const markTaskCompleted = (id) => {
    setTask(
      task.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTask(task.filter(item => item.id !== id));
  }
  
  // Función para filtrar tareas según el filtro seleccionado
  const filteredTasks = task.filter(item => {
    if (filter === "all") return true;
    if (filter === "completed") return item.completed;
    if (filter === "pending") return !item.completed;
    return true;
  });

  return(
    <>
      {/* Proveedor del contexto global */
  /*    <contextTask.Provider value={{
        title, 
        setTitle,
        description, 
        setDescription,
        task, 
        setTask,
        filter,
        setFilter, // Corregido de setFilters a setFilter
        markTaskCompleted,
        filteredTasks,
        deleteTask, // Añadimos las tareas filtradas al contexto
      }}>
        {children}
      </contextTask.Provider> 
    </>
  )
}

export const useContextTask = () => useContext(contextTask);
*/