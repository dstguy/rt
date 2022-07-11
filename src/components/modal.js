import React ,{useState,useEffect, useContext}from 'react'
import MonContext from '../Context/context1'
export default function Modal() {
  const {modal,setModal,setEdit}=useContext(MonContext)
  const [name ,setForm1]=useState('');
  const [power,setForm2]=useState('');
 
  useEffect(()=>{
    if(modal==null){
      return ;
    }
    setForm1(modal.name);
    setForm2(modal.power);
    
  },[modal])


  if(modal===null){
   return null;
  }
  const close=()=>{
    setModal(null)
  }
  const inputs={name,power,id:modal.id} 
  const save=()=>{
   setEdit(inputs)
   setModal(null)
  }

  return (
    <div className='modal-bg'>
      <div className="modal">
        <span>Edit</span>
        <div className='modal1'>
        <div className='mContainer'>
    <div className='mForms'>

    <label >name</label>
      <form className='form1'>
        <input type="text" value={name} onChange={event=>setForm1(event.target.value)}/>
      </form>

      <label >power</label>
      <form className='form2'>
        <input type="text"  value={power} onChange={event=>setForm2(event.target.value)}/>
      </form>
 
    </div>
   
  </div>

        </div>
        <button className='modalB' onClick={save}>save changes</button>
        <span className='modalX' onClick={close}>X</span>
      </div>
    </div>
  )
}
