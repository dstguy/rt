import { useContext } from 'react'
import MonContext from '../Context/context1'
import Li from './li'

export default function List() {
    const {li}=useContext(MonContext)
  return (
    <div className='card'>
      <div className='container2'>
      <h2>List of Monsters</h2>
     <ul className='list'>
        { console.log(li)}
        
{
   li? li.map(list=> <Li  key={list.id} id={list.id} list={list} created={list.created} eats={list.eats}/>):null
}
     </ul>
      </div>
  
    </div>
  )
}
