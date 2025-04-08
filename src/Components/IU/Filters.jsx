/*import React, { useState } from 'react'

export const Filters = () => {
  const [filter, setFilters ]  = useState("all");

  const handleChange = (e) => {
    setFilters(e.target.value);
  };

  return (
    <section className='flex justify-center mb-6 space-x-4'>

      <div className='flex items-center space-x-1'>
        <input
          type="radio"
          name="option"
          value="all"
          checked={filter === 'all'}
          onChange={handleChange}
          className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500'
        />
        <label className='font-semibold'>All</label>
      </div>

      <div className='flex items-center space-x-1'>
        <input
          type="radio"
          name="option"
          value="pending"
          checked={filter === 'pending'}
          onChange={handleChange}
          className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500'
        />
        <label className='font-semibold'>Pending</label>
      </div>

      <div className='flex items-center space-x-1'>
        <input
          type="radio"
          name="option"
          value="completed"
          checked={filter === 'completed'}
          onChange={handleChange}
          className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500'
        />
        <label className='font-semibold'>Completed</label>
      </div>

    </section>
  )
}
*/