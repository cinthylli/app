import React, { useState, useEffect } from 'react'
import Card from '../components/Card'

import useFetchProducts from '../hooks/useFetchProducts';


function Products({ category, points, setPoints }) {

    let { data: products, loading } = useFetchProducts("");
    
    const [categoryProducts, setcategoryProducts] = useState(products)
    
    useEffect(() => {
        async function inicial() {
            if (category === "" || category === undefined) {
                setcategoryProducts(products)
            } else {
                setcategoryProducts(products.filter(product => product.category === category))
            }
            
        }
        inicial();
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
            await setCurrentItems(categoryProducts.slice(indexOfFirstItem, indexOfLastItem));
            
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
    
    const styleSection = {
        display: "flex",
        flexWrap: "wrap",
        
    }

    const styleCard = {
        margin: "10px"
    }

    const styleList = {
        listStyleType: "square",
        display: "inline"
    }
    return (
        <>
            <h1>{category || "Products"}</h1>
            {console.log("categoryProducts > ", categoryProducts)}
            {console.log("currentItems > ", currentItems)}

            {/* {console.log("category > ", category)}
            {console.log("currentPage > ", currentPage)}
            {console.log("indexOfFirstItem > ", indexOfFirstItem)}
            {console.log("indexOfLastItem > ", indexOfLastItem)}
            
            {console.log("categoryProducts slide >>>>>>>> ",categoryProducts.slice(indexOfFirstItem,indexOfLastItem))}
            {console.log("categoryProducts slide > ",categoryProducts.slice(16,32))} */}
            {loading && "cargando....."}
            <section style={ styleSection}>
                {
                    categoryProducts.slice(indexOfFirstItem,indexOfLastItem).map((product) => {
                        return (
                            <div style={ styleCard}>
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
                            </div>
                        )
                    })
                }
            </section>
            <ul style={styleList}>
              {renderPageNumbers}
            </ul>
        </>
    )
}
export default Products