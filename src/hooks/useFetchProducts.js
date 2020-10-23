import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export default function useFetchProducts({category}) {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getProducts(category)
            .then(products => {
                setState({
                    data: products,
                    loading: false
                });
            })
    }, [category])

    return state;
}
