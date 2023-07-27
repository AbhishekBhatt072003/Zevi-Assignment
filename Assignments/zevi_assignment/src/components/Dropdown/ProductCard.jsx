import React from 'react'

const ProductCard = (props) => {

    return (
        <div
            className="productCard"
            onClick={() => props.setSearch(props.name)}
        >
            <img src={props.image} alt="Product" />
            <div>{props.name}</div>
        </div>
    )
}

export default ProductCard