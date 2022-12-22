import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = ({getProducts, products,oneProduct,getOneProduct}) => {

  const params = useParams()

  useEffect(() => {
    getOneProduct(params.id)
  }, [])

  useEffect(() => {
    getProducts()
  }, [])


  return (
          <div className='container  '>
            <img src={image} alt="" />
       
</div>
  ) 
}

export default Details