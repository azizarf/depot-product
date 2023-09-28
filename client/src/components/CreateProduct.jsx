import React, { useState } from 'react'

const CreateProduct = (props) => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [quantity,setQuantity] = useState('')
    const [imageUrl,setImageUrl] = useState('')



  return (
    <div>
        <form className="form">
    <p className="title">New Product </p>
            
    <label>
        <input required="" placeholder="" type="text" className="input" onChange={(e)=>{
            setName(e.target.value)
        }} />
        <span>Name</span>
    </label> 
     <label>
        <input required="" placeholder="" type="text" className="input" onChange={(e)=>{
            setPrice(e.target.value)
        }} />
        <span>Price</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="text" className="input" onChange={(e)=>{
            setQuantity(e.target.value)
        }}/>
        <span>Quantity</span>
    </label>
    <label>
        <input required="" placeholder="" type="text" className="input" onChange={(e)=>{
            setImageUrl(e.target.value)
        }}/>
        <span>imageUrl</span>
    </label>
    <button className="submit" onClick={(e)=>{
        e.preventDefault()
        props.handleCreate({name,price,quantity,imageUrl})
    }}>Create</button> 
</form>
    </div>
  )
}

export default CreateProduct