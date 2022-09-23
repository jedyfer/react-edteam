import axios from "axios";
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {

    /* hook : useNavigate */
    const navigation = useNavigate();

    /* estados */
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        //  post(url, contenido)
        axios.post(`https://reqres.in/api/login`, user)
            .then(data => {
                setLoading(false)
                //  Almacenamiento > almacenamiento local
                localStorage.setItem("tokenEDteam", data.data.token)
                //  redireccion de pagina
                navigation("/")
            })
            .catch(e => {
                setLoading(false)
                setError(e.response.data.error)
            })
    }

    /* <Navigate/> : incluido en react-router-dom */
    if (localStorage.getItem("tokenEDteam")) return <Navigate to="/" />

    return (
        <div className="login-container">
            <div className="form-container">
                <h1>Iniciar sesión</h1>
                <form onSubmit={submit}>
                    <div className="field">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" name="email" required
                            onChange={(e) => setUser({
                                ...user,
                                email: e.target.value
                            })}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" required
                            onChange={(e) => setUser({
                                ...user,
                                password: e.target.value
                            })}
                        />
                    </div>
                    <div className="submit">
                        <input type="submit" value={ loading ? "Cargando..." : "Iniciar" } />
                    </div>
                </form>
                {/* render condicional */}
                { error && <span className="error">Error: { error }</span>}
            </div>
        </div>
    )
}

export default Login