import React from 'react'
import Product from './Product'

function ProductList({phoneList}) {
  console.log(phoneList)
  return (
    <div className='product-list-main'>
      {
       phoneList.map((phone,i)=>{
          return <Product product={phone} />          
        }
        )
      }
      
      
    </div>
  )
}

export default ProductList