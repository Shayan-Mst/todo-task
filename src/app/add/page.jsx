"use client"
import Button from '@/components/Button';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

 const Add = () => {

  const [data,setData] = useState({
    title:"",
    description:""
  })

  

  const addHandler = async(e) => {

    e.preventDefault();
    const toastLoad = toast.loading('Applying new Todo...');
    const response =  await fetch('/api/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
  
    console.log(response.status)
    if(response.status==400){
       toast.dismiss(toastLoad)
       toast.error("Cant add more than 5 todo !");
    }

    if(response.ok){
      toast.dismiss(toastLoad)
       toast.success("successfuly created !");
    }

  }

  return (
    <form onSubmit={addHandler} className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full'>
      <h2 className='text-white text-center my-4 text-[32px]'>ADD TODO</h2>
      <input value={data.title} onChange={e => setData({...data,title:e.target.value})} type='text' placeholder='enter title of work' className='bg-white text-black p-2 my-2 rounded-lg w-full'/>
      <textarea value={data.description} onChange={e => setData({...data,description:e.target.value})} type="text" placeholder="Description (optional)" className="bg-white text-black p-2 my-2 rounded-lg w-full"></textarea>
      <Button type="submit" color='green' children={"Add todo"}/>
    </form>
  )
}

export default Add;