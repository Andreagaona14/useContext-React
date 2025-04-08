import React from 'react'
import { useContextTask } from "../../Context/Context";



export const Form = () => {
  const {
    title, setTitle,
    description, setDescription,
    task, setTask
  } = useContextTask();

  const addTask = (e) => {
    e.preventDefault();
    const currentTask = {
      id: Date.now(),
      title,
      description,
      completed: false
    }
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill in all fields");
      return;
    }else{
      setTask([...task, currentTask]);
    setTitle("");
    setDescription("");
    }
}

  return (
    <form onSubmit={addTask} className='mb-6'>
      <input
        type="text"
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full px-3 py-2 border-2 rounded-md mb-3  border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200'
      />

      <textarea
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='w-full px-3 py-2 border-2 rounded-md mb-3 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200'
      />

      <button
        type="submit"
        className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition'>
        Add Task
      </button>
    </form>
  )
}