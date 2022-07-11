import React ,{useContext, useState} from 'react'
import FContext from '../Context/foodsContext'

export default function FForms() {
  const {setFComp}=useContext(FContext)
  const [foods,setForm1]=useState('')

  
 const add=()=>{  
 const data={foods}
  setFComp(data)
  setForm1('')
 }

  return (
    <div className='container3'>
        <h2>Add foods</h2>
    <div className='forms'>

    <label >eats</label>
      <input type="text" onChange={event=>setForm1(event.target.value)} value={foods}/>
     
       <button className='button' onClick={add}>add</button>
    </div>
   
  </div>
  )
}