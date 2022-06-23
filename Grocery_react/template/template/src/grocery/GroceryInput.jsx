import React, { useState } from 'react'

const GroceryInput = ({arr, onclick}) => {
    // console.log(onclick)
    const[Item,setItem]=useState('')
    const [quantity,setQuantity]=useState('')
     
   
    const handleSubmit =() =>{
        console.log(1)
        onclick({Item,quantity})
        setItem('')
        setQuantity('')
    }
  return (
    <>
    <h2>Add Your Item here</h2>
    <input type="text" placeholder='Add Item...' value={Item} onChange={(e)=>setItem(e.target.value)} />
    <br />
    <input type="text" placeholder='Add Quan...' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
    <br />
    <button onClick={
        Item.length >0 && quantity.length > 0 ? handleSubmit : ()=>alert('Please fill the details properly')
    }> Add </button>
    </>
  )
}

export default GroceryInput