import React from 'react'
import ProductForm from '../components/ProductForm'
import Products from '../components/Products'

export default function Home() {
  return (
    
    <main className="py-16">
    <div className="productWrapper">
        <Products/>
        <ProductForm/>
    </div>
    </main>
  )
}
