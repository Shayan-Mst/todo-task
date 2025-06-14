"use client"
import Spinner from '@/components/Spinner'
import React, { useEffect , useState } from 'react'
import Cards from '@/components/Cards'

 const Delete = () => {

  const [data,setData] = useState()
  const [loading,setLoading] = useState(false)
  


  useEffect(()=>{

    const fetchData = async() => {

        try{
       
          setLoading(true);
      
          const response =  await fetch('/api/save',{method:'GET',headers:{'Content-Type':'application/json'}})
   
          const fetchedData = await response.json();
       
          if(response.ok){ 
       
             setData(fetchedData)
             setLoading(false)
            
      }
      }
    

 catch(error){

  console.log(error)
      }
  
    }

    fetchData();
  },[])

  return (
    <>
     <div className="p-4 m-8">
      <h1 className="text-xl font-bold mb-4 text-center">Delete Tasks</h1>

      {loading && <Spinner/>}

      {data?.length === 0 && <p className='text-white text-center text-[32px]'>No tasks found...</p>}

      {!loading &&
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       { data?.map((todo) => (
          <Cards
          key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            isDone={todo.isDone}
            setData = {setData}
            isView={false}
          />
        ))
      }
          </div>
        }
      
    </div>
    </>
  )
}

export default Delete;