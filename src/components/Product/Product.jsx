import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Product = ({ getProducts, products , deleteProduct}) => {

  useEffect(() => {
    getProducts()
  }, [])

  const navigate =useNavigate()

  return (
    <div className='container d-flex justify-content-between flex-wrap mt-5 '>
      {products.map((item) => (
        <Card className='mt-5' key={item.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>$
              {item.price}
            </Card.Text>
            <Button onClick={() => navigate(`/edit/${item.id}`)} variant="secondary">Edit</Button>
            <Button variant="success" onClick={() => navigate(`/details/${item.id}`)}>Details</Button>
            <Button onClick={() => deleteProduct(item.id)} variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Product