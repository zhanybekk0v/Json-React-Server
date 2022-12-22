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
  }

  return (
    <div className='container'> 
      <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title'/>
      <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='price'/>
      <input onChange={(e) => setImage(e.target.value)} type="text" placeholder='image'/>
      <button  onClick={handleValues}> Add product</button>
    </div>
  )
}

export default AddForm