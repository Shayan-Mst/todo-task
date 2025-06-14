import React from 'react'

 const Add = () => {
  return (
    <form className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full'>
      <input type='text' placeholder='enter title of work' className='bg-white text-black p-2 my-2 rounded-lg w-full'/>
      <textarea type="text" placeholder="Description (optional)" className="bg-white text-black p-2 my-2 rounded-lg w-full"></textarea>
    </form>
  )
}

export default Add;