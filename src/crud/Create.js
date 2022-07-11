import React ,{useContext, useState} from 'react'
import { useEffect } from 'react'
import MonContext from '../Context/context1'


export default function Forms() {
  const {setComp,Fli}=useContext(MonContext)

  const [name ,setForm1]=useState('')
  const [power,setForm2]=useState('')
  const [food,setFood]=useState('select foods')

  
 const add=()=>{
  const inputs={name,power,food} 
  setComp(inputs)
  setForm1('')
  setForm2('')
  setFood('select foods')
 }

  return (
    <div className='container1'>
        <h2>Add new Monster</h2>
    <div className='forms'>
    <label >name</label>
      <form className='form1'>
        <input type="text" value={name} onChange={event=>setForm1(event.target.value)}/>
      </form>
      <label >power</label>
      <form className='form2'>
        <input type="text"  value={power} onChange={e=>setForm2(e.target.value)} />
      </form>
      <select   onChange={event=>setFood(event.target.value)} >
        <option type="text" disabled selected='true' value={food} >select foods</option>
       {
       Fli ? Fli.map(e=>{
        return(
          <option key={e.id} value={e.id}>{e.title}</option>
        )
       }):null
       }
      </select>
       <button className='button' onClick={add}>add</button>
    </div>
   
  </div>
  )
}