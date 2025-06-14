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
        console.log(data)
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
     <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Delete Tasks</h1>

      {loading && <Spinner/>}

      {data?.length === 0 && <p className='text-white'>No tasks found.</p>}

      {!loading &&

        data?.map((todo, index) => (
          <Cards
           
            title={todo.title}
            description={todo.description}
          />
        ))}
    </div>
    </>
  )
}

export default Delete;