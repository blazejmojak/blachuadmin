import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'
import Product from './Product'

const Products = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products`).catch(err => console.log('err', err))
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log("products are: ", products)
    return (
        <div>
            <h1>Products List</h1>
            <Product />
        </div>
    )
}

export default Products
