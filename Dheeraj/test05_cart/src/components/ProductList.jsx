import React from 'react'
import Product from "./Product"


export default function ProductList(props) {
    console.log(props);
    return (
        <div className='product-list'>        
        {props.productList.map((product,i)=>{
            return <Product product={product} key={i}/>
        })}
        </div>
  )
}
