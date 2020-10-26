import React, { useState, useEffect } from 'react'
import Card from '../components/Card'

import useFetchProducts from '../hooks/useFetchProducts';


function Products({ category, points,setPoints }) {

    const { data: products, loading } = useFetchProducts("");

    const [categoryProducts, setcategoryProducts] = useState([])



    useEffect(() => {
        if (category === "" || category === undefined) {
            setcategoryProducts(products)
        } else {
            setcategoryProducts(products.filter(product => product.category === category))
        }
    }, [category,points])

    return (
        <>
            <h1>{category || "Products"}</h1>
            {loading && "cargando....."}
            <section>
                {
                    categoryProducts.map((product) => {
                        return (
                            <Card
                                category={product.category}
                                product={product.name}
                                pointsLeft={points}
                                cost={product.cost}
                                img={product.img.url}
                                id={product._id}
                                key={product._id}
                                setPoints={setPoints}
                            />
                        )
                    })
                }
            </section>
        </>
    )
}
export default Products