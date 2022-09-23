import { Navigate, Outlet } from "react-router-dom"
import Menu from "./menu/Menu"
import "./App.css"

function App() {
    /* si no existe el token de login */
    if (!localStorage.getItem("tokenEDteam")) return <Navigate to="/login"/>    

    return (
        <div className="app-container">
            {/* para que el menu este presente en las demas rutas */}
            <Menu />
            {/* El outlet será emplazado por todos los hijos del grupo de route "/" */}
            {/* Outlet propio de la version 6 de react */}
            <Outlet />
        </div>
    )
}

export default App