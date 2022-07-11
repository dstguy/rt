import { useContext } from "react"
import MonContext from "../Context/context1"

export default function Li({list,id,created,eats}) {
    const{setDeletD,setModal,}=useContext(MonContext)
    const delet=()=>{
        setDeletD(list)
    }
    const edit=()=>{
      setModal(list)
  }
  return (
   
      <li className="li">
        <div className="container item">
            <b>{list.name}</b>
            <img src={`https://robohash.org/${id}?set=set4&$size=180x180.png`} alt="monster" />
           <span>{list.power}</span> 
           <span>{id}</span>
           <span>{eats}</span>
           <h4>{created}</h4>
            <div className="cont">
            <button className='buttonE' onClick={edit}>edit</button>
            <button className='buttonD' onClick={delet}>delet</button>
            </div>
        </div>
        
        
       </li>
 
  )
}
