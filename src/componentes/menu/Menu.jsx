import { NavLink } from "react-router-dom"
import "./Menu.css"

function Menu() {
  return (
    <nav className="main-menu">
        <ul>
            {/* Remplazamos el a por <Link> de react-router */}
            {/* btw <Link /> no peude estar fuera del <BrowserRouter> */}
            {/* <Link> <NavLink/> diferencia uno es para cualquier link y el otro especializado en nav del menu */}
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/criptomonedas">Criptomonedas</NavLink></li>
        </ul>
    </nav>
  )
}

export default Menu