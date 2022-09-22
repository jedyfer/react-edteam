import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CriptoDetails from "./CriptoDetails";
import CriptoHistory from "./CriptoHistory";
import "./CriptoPage.css"

function CriptoPage() {
    /* devuelve los parametros que estan en la url */
    const params = useParams();

    /* variable de entorno */
    const API_URL = import.meta.env.VITE_API_URL;

    /* estados */
    const [cripto, setCripto] = useState();
    const [history, setHistory] = useState();

    useEffect(() => {
        /* GET by id */
        axios.get(`${API_URL}assets/${params.id}`)
            .then((data) => setCripto(data.data.data))
            .catch(() => console.error("La petición falló"))
        
        /* GET by id and history */
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
            .then((data) => setHistory(data.data.data))
            .catch(() => console.error("La petición falló"))
    }, []);

    if (!cripto || !history) return <span>Cargando...</span>

    return (
        <div className="cripto-page-container">
            <CriptoDetails cripto={ cripto }/> 
            <CriptoHistory history={ history } />
        </div>
    )
}

export default CriptoPage