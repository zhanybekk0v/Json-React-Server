import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'

const Product = ({getProducts, products}) => {

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='container d-flex justify-content-between flex-wrap mt-5 '>
      {products.map((item ) => (
          <Card className='mt-5'  key={item.id}style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image}/>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>$
              {item.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Product