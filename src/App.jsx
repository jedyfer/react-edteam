import { useEffect, useState } from "react"
import axios from "axios";  //  npm add axios
import "./App.css";

function App() {

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
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        { criptos.map((c, i) => (
          <li key={i}>Nombre: { c.name } Precio : { c.priceUsd } </li>
        )) }
      </ol>
    </>
  )
}

export default App
