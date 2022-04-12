import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, removeSelectedProduct} from '../redux/actions/productActions'

const ProductDetail = () => {
  const product = useSelector(state=>state.product)
  const {title, category, price, image} = product
  const { productId } = useParams()
  const dispatch = useDispatch()
  // const fetchProductDetail = async ()=>{
  //   const res = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>{
  //     console.log("Err ",err)
  //   })
  //   dispatch(selectedProduct(res.data))
  // }
  useEffect(()=>{
    if(productId && productId !== '') dispatch(fetchProduct(productId))
    return ()=>{   //to remove previous state
      dispatch(removeSelectedProduct())
    }
  },[productId])
  return (
    <>
    {Object.keys(product).length === 0 ? 
    <h2>....Loading</h2> :
    <div>
      <h1>Product Detail</h1>
      <img src={image} alt={title} style={{width:"200px"}}/>
      <h3>{title}</h3>
      <h3>{price}</h3>
      <button>Add to Cart</button>
    </div>
    }
    
    </>
  )
}

export default ProductDetail