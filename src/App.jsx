import React from 'react'
import { Form } from "./Components/Pages/Form"
import { Filters } from "./Components/IU/Filters"
import { List } from "./Components/Pages/List"


export const App = () => {
  
  return (
    <>
      <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border-1 border-gray-200'>
      <h1 className='text-2xl font-bold text-center mb-6' >To-Do List</h1>

      <Form/>
      <Filters/>
      <List/>
      </div>
     </>
    
  )
}