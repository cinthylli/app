import React, { useState, useEffect } from 'react'
import Card from '../components/Card'

import useFetchProducts from '../hooks/useFetchProducts';


function Products({ category, points, setPoints }) {

    const { data: products, loading } = useFetchProducts("");

    const [categoryProducts, setcategoryProducts] = useState([])

    useEffect(() => {
        if (category === "" || category === undefined) {
            setcategoryProducts(products)
        } else {
            setcategoryProducts(products.filter(product => product.category === category))
        }
    }, [category])

    const itemsPerPage = 16;
    const [currentPage, setcurrentPage] = useState(1);
    const [indexOfLastItem, setIndexOfLastItem] = useState(itemsPerPage);
    const [indexOfFirstItem, setIndexOfFirstItem] = useState(0);
    const [currentItems, setCurrentItems] = useState(products);

    useEffect(() => {
        async function fetchData() {
            await setIndexOfFirstItem(itemsPerPage *  (currentPage-1));
            await setIndexOfLastItem(itemsPerPage *  (currentPage));
            await setCurrentItems(categoryProducts.slice({indexOfFirstItem, indexOfLastItem}));
            
        }
        fetchData();
    }, [currentPage,itemsPerPage])

    const handleClick = (e) => {
        setcurrentPage(e.target.id)
        console.log(currentPage);
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(categoryProducts.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
          >
            {number}
          </li>
        );
      });

    return (
        <>
            <h1>{category || "Products"}</h1>

            {console.log("category > ", category)}
            {console.log("currentItems > ", currentItems)}
            {console.log("currentPage > ", currentPage)}
            {console.log("indexOfFirstItem > ", indexOfFirstItem)}
            {console.log("indexOfLastItem > ", indexOfLastItem)}
            
            {console.log("categoryProducts slide >>>>>>>> ",categoryProducts.slice(indexOfFirstItem,indexOfLastItem))}
            {console.log("categoryProducts slide > ",categoryProducts.slice(16,32))}
            {loading && "cargando....."}
            <section>
                {
                    categoryProducts.slice(indexOfFirstItem,indexOfLastItem).map((product) => {
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
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
        </>
    )
}
export default Products