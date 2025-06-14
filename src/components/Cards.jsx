import React from 'react'
import Button from './Button'

const Cards = ({title,description}) => {

    const deleteHandler = async() => {


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
   <div  className="bg-gray-900 min-h-screen p-6 text-white">
  <div className="max-w-md mx-auto">
    <div className="bg-gray-800 rounded-2xl shadow-md p-6 flex justify-between items-start hover:bg-gray-700 transition">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <Button type="button" onClick={deleteHandler}  color='red' children="delete" ></Button>
    </div>
  </div>
</div>
  )
}

export default Cards