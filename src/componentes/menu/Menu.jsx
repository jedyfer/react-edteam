import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import "./Menu.css"

function Menu() {

  /* de esta forma se usa la data del context */
  const user = useContext(UserContext);

  const navigation = useNavigate();

  return (
    <nav className="main-menu">
        <ul>
            {/* Remplazamos el a por <Link> de react-router */}
            {/* btw <Link /> no peude estar fuera del <BrowserRouter> */}
            {/* <Link> <NavLink/> diferencia uno es para cualquier link y el otro especializado en nav del menu */}
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
            <li><NavLink to="/perfil">Perfil </NavLink></li>
            <li>
              <a onClick={() => {
                //  quitamos el token
                localStorage.removeItem("tokenEDteam")
                navigation("/login")
              }}>Cerrar sesión</a>
            </li>
        </ul>
    </nav>
  )
}

export default Menu