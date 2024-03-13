import React from 'react'
import { IProduct } from './interface'


interface ProductProps {
    product: IProduct
}

const Product: React.FC<ProductProps> = (props) => {
    
    const { product } = props

    return (
        <div className='card'>
            <div className='thumb'>
                <img src={product.image} alt="" />
            </div>
            <div className='info'>
                <h2>{product.title}</h2>
                <h4>{product.description}</h4>
                <h4>{product.category}</h4>
                <h4>{product.price}</h4>
                <h4>{product.rating.rate}</h4>
            </div>
        </div>
    )
}


export default Product