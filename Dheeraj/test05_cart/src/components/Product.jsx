import React from 'react'

export default function Product(props) {
    console.log(props)
  return (
    <div className='product-main'>{props.product.name} <span className='product-span'>₹{props.product.price}</span> </div>
  )
}


