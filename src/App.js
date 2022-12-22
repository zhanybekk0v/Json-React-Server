import axios from 'axios'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddForm from './components/AddForm/AddForm'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

const App = () => {
  const API = 'http://localhost:8001/products'
  const [products, setProducts] = useState([])
  //? create (add)
  function addProduct(newProduct) {
    axios.post(API, newProduct)
  }

  //? Read (get request)

 async  function getProducts(){
  const result = await axios.get(API)
  setProducts(result.data);
 }
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Product  products={products} getProducts={getProducts}/>} />
          <Route path='/add' element={<AddForm addProduct={addProduct} />} />
          <Route path='/contacts' element={<h1> contacts</h1>} />
          <Route path='*' element={<h1> 404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App