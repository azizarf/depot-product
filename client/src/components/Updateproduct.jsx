import React, { useState } from 'react'

const Updateproduct = (props) => {
    const [name,setName] = useState(props.toUpdate.name)
    const [price,setPrice] = useState(props.toUpdate.price)
    const [quantity,setQuantity] = useState(props.toUpdate.quantity)
    const [imageUrl,setImageUrl] = useState(props.toUpdate.imageUrl)
    return (
        <div>
            <form className="form">
                <p className="title">Update Product</p>

                <label>
                    <input required="" placeholder="" type="text" className="input" defaultValue={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <span>Name</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" defaultValue={price} onChange={(e) => {
                        setPrice(e.target.value)
                    }} />
                    <span>Price</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" className="input"  defaultValue={quantity} onChange={(e) => {
                        setQuantity(e.target.value)
                    }} />
                    <span>Quantity</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input"  defaultValue={imageUrl} onChange={(e) => {
                        setImageUrl(e.target.value)
                    }} />
                    <span>imageUrl</span>
                </label>
                <button className="submit" onClick={(e) => {
                    e.preventDefault()
                    props.handleUpdate({ name, price, quantity, imageUrl },props.toUpdate.id)
                }}>Update</button>
            </form>
        </div>
    )
}

export default Updateproduct