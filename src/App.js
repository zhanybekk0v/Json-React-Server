import axios from 'axios'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddForm from './components/AddForm/AddForm'
import Details from './components/Details/Details'
import EditForm from './components/EditForm/EditForm'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

const App = () => {
  const API = 'http://localhost:8001/products'

  const [products, setProducts] = useState([])
  const [oneProduct, setOneProduct] = useState(null)

  //? create (add)
  function addProduct(newProduct) {
    axios.post(API, newProduct)
  }

  //? Read (get request)
  async function getProducts() {
    const result = await axios.get(API)
    setProducts(result.data);
  }

  // Todo delete
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts()
  }

  //Todo get one product for edit
  async function getOneProduct(id) {
    let result = await axios.get(`${API}/${id}`)
    setOneProduct(result.data)
  }

  //Todo upDate 
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct)
    // getProducts()

  }


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Product deleteProduct={deleteProduct} products={products} getProducts={getProducts} />} />
          <Route path='/add' element={<AddForm addProduct={addProduct} />} />
          <Route path='/contacts' element={<h1> contacts</h1>} />
          <Route path='*' element={<h1> 404 NOT FOUND</h1>} />
          <Route path='/edit/:id' element={<EditForm updateProduct={updateProduct} getOneProduct={getOneProduct} oneProduct={oneProduct} />} />
          <Route path='/details/:id' element={<Details getOneProduct={getOneProduct} oneProduct={oneProduct} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App