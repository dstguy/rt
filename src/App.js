import React,{useState,useEffect,useRef,useReducer} from 'react'
import './App.css'
import List from './components/List';
import Forms from './crud/Create'
import Modal from './components/modal';
import  MonContext from './Context/context1';
import axios from 'axios'
import FForms from './foods/foodcCreat';
import FContext from './Context/foodsContext';

export default function App() {
  /////////Monster
  const[edit,setEdit]=useState(null)
  const [modal,setModal]=useState(null)
  const[li,setLi]=useState(null)
  const[comp,setComp]=useState(null)
  const[deletD,setDeletD]=useState()
  /////////Foods
  const[Fli,setFLi]=useState(null)
  const[Fcomp,setFComp]=useState(null)
  ///////Overall
  const[lUpdate,setLupdate]=useState(Date.now())
 
  ///////////////////////////////////////////////
  useEffect(()=>{
    axios.get('http://localhost:3017/monsters')
    .then(res=>setLi(res.data))
    .catch((error)=>{
        console.log('error-->',error);
    })
    },[lUpdate])
  useEffect(()=>{
    if(comp==null){
      return
    }
    axios.post('http://localhost:3017/monsters',comp)
    .then(()=>{
      setLupdate(Date.now())
    })
    .catch(error=>{
      console.log('error-->',error);
    })
  },[comp])
  ////////Fcreat
  useEffect(()=>{
    if(Fcomp==null){
      return;
    }
    axios.post('http://localhost:3017/foods',Fcomp)
    .then(()=>{
      setLupdate(Date.now())
    })
    .catch(error=>{
      console.log('error-->',error);
    })
  },[Fcomp])

  useEffect(()=>{
    axios.get('http://localhost:3017/foods')
    .then(res=>setFLi(res.data))
    .catch((error)=>{
        console.log('error-->',error);
    })
    },[lUpdate])

  useEffect(()=>{
    if(deletD==null){
      return
    }
    axios.delete('http://localhost:3017/monsters/' + deletD.id)
    .then(()=>{
      setLupdate(Date.now())
    })
      .catch(error=>{
        console.log('error-->',error);
      })
  },[deletD])
  useEffect(()=>{
    if(edit==null){
      return;
    }
    axios.put('http://localhost:3017/monsters/' + edit.id, edit)
    .then(()=>{
      setLupdate(Date.now())
    })
      .catch(error=>{
        console.log('error-->',error);
      })
  },[edit])
  
  return (

       <MonContext.Provider value={
        {
            li,
            modal,
            Fli,
            setComp,
            setDeletD,
            setEdit,
            setModal
        }
       }>
        <FContext.Provider value={{
          setComp:setFComp,
          setFComp
        }}>
      
       <Forms />
       <FForms/>
       <List/>
       <Modal />
       </FContext.Provider>
       </MonContext.Provider>
   
  )
}
