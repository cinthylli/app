import { useEffect, useState } from "react";
import { redeemPoints } from '../helpers/redeemPoints'
import useFetchUser from './useFetchUser'

export default function useRedeemProducts({ productId, points, shouldFetch, setPoints }) {
    const [state, setState] = useState({
        productId: "",
        message: "",
    })
    useFetchUser({points:1})

    useEffect(async () => {
        
        if (shouldFetch) {
            redeemPoints({productId:productId})
            console.log("Puedes Redimirlo");
            console.log(productId);
            setState({
                productId: productId,
                message:"redimiendo en useRedeemProducts"
            })
        }
    }, [productId,points,shouldFetch])

    return state;
}
