import { useEffect, useState } from "react";
import { getUser } from '../helpers/getUser'

export default function useFetchUser(points) {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getUser().then(user => {
            setState({
                data: user,
                loading: false
            })
        })
    }, )
    
    return state;
}
