import { useEffect, useState } from "react"
import axios from "axios";  //  npm add axios
import "./Criptomonedas.css";
import Criptos from "./Criptos";

function Criptomonedas() {

  const API_URL = import.meta.env.VITE_API_URL;
  const [criptos, setCriptos] = useState();

  /* se ejecutara solo una vez */
  useEffect(() => {
    /* promesa */

    /* 1ra forma para obtener datos de una API */
    /* fetch(`${API_URL}assets`)
      //  de forma exitosa
      .then((res) => res.json()) // la respuesta la convierte en json
      .then((data) => setCriptos(data.data))  //  data.data ahi se encuentra la info : se puede ver en console
      //  capturando un error
      .catch(() => console.error("La petición falló"))   */

    /* 2da forma con axios */
    axios.get(`${API_URL}assets`)
      .then((data) => setCriptos(data.data.data))  // axios devuelve la info en .data.data 
      .catch(() => console.error("La petición falló"))
  }, []);

  /* loader */
  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1 className="app-title"><span className="line">Rank de Criptomonedas</span></h1>
      <div className="crypto-container">
        { criptos.map(({id, rank, name, priceUsd, symbol, changePercent24Hr}, i) => (
          <Criptos 
            key={ i } 
            id={ id } 
            rank={ rank } 
            nombre={ name } 
            precio={ priceUsd } 
            simbolo={ symbol } 
            variacion={ changePercent24Hr } 
          />
        )) }
      </div>
    </div>
  )
}

export default Criptomonedas
