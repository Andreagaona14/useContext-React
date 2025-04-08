import React from 'react'
import { useContextTask } from '../../Context/Context'

export const btnFilters = ({type, children}) => {
  const {filter, setFilters } = useContextTask();


  return (
    <button
    onClick = {() =>setFilters(type)}
    className={`px-4 py-2  border border-blue-300 rounded ${
      filter === type ? "bg-gray-200" : "bg-white"
    }`}>
      {children}
    </button>
  )
}