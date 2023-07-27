import React, { useState, useEffect } from 'react'
import { getProductData, getSuggestions } from '../../api/faker'
import ProductCard from './ProductCard'
import './style.scss'
const Dropdown = (props) => {

    const [productData, setProductData] = useState([])
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        setProductData(getProductData);
        setSuggestions(getSuggestions);
    }, []);

    return (
        <div className="cardContainer">
            <div>
                <h3 className='trendHeading'>Latest trends</h3>
                <div className="card">
                    {[...productData].map((e, index) => (
                        <ProductCard
                            key={index}
                            setSearch={props.setSearch}
                            image={e.image}
                            name={e.name}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h3> Popular Suggestions</h3>
                <div>
                    {[...suggestions].map((e, index) => (
                        <div
                            className="suggestions"
                            key={index}
                            onClick={() => props.setSearch(e.name)}
                        >
                            {e.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dropdown