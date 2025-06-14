"use client"
import Button from '@/components/Button';
import React, { useState } from 'react'


 const Add = () => {

  const [data,setData] = useState({
    title:"",
    description:""
  })

  const addHandler = () => {


  }

  return (
    <form className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full'>
      <h2 className='text-white text-center my-4 text-[32px]'>ADD TODO</h2>
      <input type='text' placeholder='enter title of work' className='bg-white text-black p-2 my-2 rounded-lg w-full'/>
      <textarea type="text" placeholder="Description (optional)" className="bg-white text-black p-2 my-2 rounded-lg w-full"></textarea>
      <Button func={addHandler} color='green' children={"Add todo"}/>
    </form>
  )
}

export default Add;