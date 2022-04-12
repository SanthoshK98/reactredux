import React, {useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts, fetchProducts } from '../redux/actions/productActions'

const ProductListing = () => {
  const products = useSelector((state)=>state)
  const dispatch = useDispatch()
    // const fetchProducts = async ()=>{
    //   const res = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
    //     console.log("Err",err)
    //   })
    //   dispatch(setProducts(res.data))
    // }
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])
    console.log("Products:", products)
  return (
    <ProductComponent/>
  )
}

export default ProductListing