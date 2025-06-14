import React from 'react'
import Button from './Button'
import toast from 'react-hot-toast'

const Cards = ({id,title,description,isDone,setData,isView}) => {

    const deleteHandler = async(id) => {


  try{

      const toastLoad = toast.loading('Applying delete...');
    const response =  await fetch(`api/save/${id}`,{method:'DELETE',headers:{'Content-Type':'application/json'}})
  
    
   console.log(response)

    if(response.ok){
      toast.dismiss(toastLoad)
      toast.success("successfuly deleted !");
      setData(prev => prev.filter((item) => item.id !== id));
    }
  }

  catch(error){
 
       console.log(error)
       toast.dismiss(toastLoad)
       toast.error("Cant delete at the moment !");
    

  }
  
    }

    const markAsDoneHandler = async(id , isDone) => {

         try{

      const toastLoad = toast.loading('Applying delete...');
    const response =  await fetch(`api/save/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(isDone)})
  
    
   console.log(response)

    if(response.ok){
      toast.dismiss(toastLoad)
      toast.success("apply was successful !");
      setData(prevData => 
    prevData.map(todo => 
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    )
  );
    }
  }

  catch(error){
 
       console.log(error)
       toast.dismiss(toastLoad)
       toast.error("Cant mark as done at the moment !");
    

  }
  
    }
  return (
   <div  className="bg-gray-900  p-6 text-white min-h-[250px] rounded-lg">
  <div className="max-w-md mx-auto">
    <div className="bg-gray-800 h-full rounded-2xl shadow-md p-6  flex-row justify-between items-start hover:bg-gray-700 transition">
      <div className='h-full mb-8'>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-md text-gray-400">{description}</p>
      </div>
      {isView?   <Button type="button" onClick={isDone?() => markAsDoneHandler(id,false) : () => markAsDoneHandler(id,true)}  color='blue' children={`${isDone?"Unmark As Done" : "Mark As Done"}`} ></Button> :   <Button type="button" onClick={() => deleteHandler(id)}  color='red' children="delete" ></Button>}
    
    </div>
  </div>
</div>
  )
}

export default Cards