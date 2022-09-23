import axios from "axios";
import { useEffect, useState } from "react"

const  usePetition = (endpoint) => {

    /* variable de entorno */
    const API_URL = import.meta.env.VITE_API_URL;

    /* estado */
    const [state, setState] = useState();
    /* este loading es para saber si el estado no es null */
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true)

        axios.get(`${API_URL}${endpoint}`)
            .then((data) => {
                setState(data.data.data)
                setLoading(false)
            })
            .catch((e) => {
                console.error("Error de petición: " + e)
                setLoading(false)
            })
    }, []);

    return [state, loading]
}

export default usePetition