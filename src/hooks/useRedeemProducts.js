import { useEffect, useState } from "react";
import { redeemPoints } from '../helpers/redeemPoints'

export default function useRedeemProducts({ productId, points, shouldFetch }) {
    const [state, setState] = useState({
        productId: "",
        message: "",
    })

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
