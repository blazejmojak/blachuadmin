import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, selectedProductAsync, removeSelectedProduct } from '../redux/actions/productActions'
import axios from 'axios'
import Loading from './Loading'

const ProductDetails = () => {
    const product = useSelector(state => state.product)
    const { image, title, price, category, description } = product
    const dispatch = useDispatch()
    const { id } = useParams();
    console.log(id)
    console.log('product is: ', product)

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(err => console.log('err is: ', err))
        console.log(response.data)
        dispatch(selectedProductAsync(response.data))
    }

    useEffect(() => {
        if (id && id !== "") fetchProductDetails()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [id])


    return (
        <div>
            {console.log('28', product)}
        {
            Object.keys(product).length === 0 ?
                <div><Loading /></div>
                :
                <div>
                    <h3>{title}</h3>
                    <div><img src={image} style={{maxWidth: '100px'}} alt={title} /></div>
                    <h5>{description}</h5>
                </div>
        }
        </div>
    )
}

export default ProductDetails
