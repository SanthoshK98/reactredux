import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector((state)=>state.allProducts.products)
    const renderList = products.map((product)=>{
      const {id, title, image, price, category} = product
      return(
      <div className='flex'>
        <div key={id} >
          <Link to={`/product/${id}`}>
            <img src={image} alt={title} style={{width:"100px"}}/>
            <h3>{title}</h3>
            <h3>$ {price}</h3>
            <h3>{category}</h3>
          </Link>
        </div>
      </div>  
      )
    })
  return (
    <div >
        {products.length === 0 ? <h3>...Loading</h3> : renderList}
    </div>
  )
}

export default ProductComponent