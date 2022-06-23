import React from 'react'
import './grocery.css'

const GroceryList = ({arr,del,incr,decr,val,length}) => {
  return (
   <>
   {
       arr.length > 0 ? 
       <div  className='listBoxhead' >
       <div>Itmes</div>
       <div>Quanity</div>
       <div>Status</div>
   </div> : ''
   }
  
    {
        arr.map(({Item,quantity,id})=>{
       
         return(
         
                 <div className='listBox' key={id}>
                 <div>{Item}</div>
                 <div>{quantity}Kg</div>
                 <button style={{border:"none",padding:"0vh 1vh",borderRadius:".8vw"}} onClick={()=>del(id)} >Delete</button>
             </div>
            
         )
        })
      }
      <button className='pageButton' onClick={decr} disabled={val === 1}>Prev</button>
      <button className='pageButton' onClick={incr} disabled={val === Math.ceil(length/3)} >Next</button>
    </>
  )
}

export default GroceryList