import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditForm = ({ getOneProduct, oneProduct , updateProduct }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const params = useParams()
  const navigate =useNavigate()

  useEffect(() => {
    getOneProduct(params.id)
  }, [])

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title)
      setPrice(oneProduct.price)
      setImage(oneProduct.image)
    }
  }, [oneProduct])

  function handleValues() {
    const editNewProduct = {
      title,
      price,
      image
    };
    updateProduct(params.id, editNewProduct)

    setTitle('')
    setPrice('')
    setImage('')
  }


  return (
    <div className='container'>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' />
      <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder='price' />
      <input value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder='image' />
      <button onClick={() => {handleValues() ; navigate('/')}}> Save chages</button>
    </div>
  )
}

export default EditForm