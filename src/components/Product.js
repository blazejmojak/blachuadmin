import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <Link to={`/product/${id}`} key={id}>
                <div>
                    <h3>{title}</h3>
                    <div>
                        <img src={image} style={{ maxWidth: '100px' }} alt={title} />
                    </div>
                    <div>
                        <h4>{price}</h4>
                        <h4>{category}</h4>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div>
            {renderList}
        </div>
    )
}

export default Product
