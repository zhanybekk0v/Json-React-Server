import React, { useState } from 'react'

const AddForm = ({addProduct}) => {
  const [title , setTitle] = useState('')
  const [price , setPrice] = useState('')
  const [image , setImage] = useState('')
  
  function handleValues (){
    const newProduct ={
      title,
      price,
      image
    };
    addProduct(newProduct);
    setTitle('')
    setPrice('')
    setImage('')
  }


  return (
    <div className='container'> 
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title'/>
      <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder='price'/>
      <input  value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder='image'/>
      <button  onClick={handleValues}> Add product</button>
    </div>
  )
}

export default AddForm