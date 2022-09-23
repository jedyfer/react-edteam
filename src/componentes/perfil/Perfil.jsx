/* importante: importar el useContext y UserContext */
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Perfil() {
    /* para usar el context */
    const user = useContext(UserContext);

    return (
        <div>
            <h2>Perfil de { user.name }</h2>
            <p><span className="label">Registrado: </span>{ user.registered }</p>
        </div>
    )
}

export default Perfil