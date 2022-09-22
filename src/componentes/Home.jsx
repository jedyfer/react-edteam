import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Hola, bienvenido a <span className="label">EDmark</span></h1>
            <p>Conoce las 100 criptos más usadas</p>
            <Link to="/criptomonedas" className="link">Ver criptomonedas</Link>
        </div>
    )
}

export default Home