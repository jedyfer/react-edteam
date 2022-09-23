import { createContext } from "react";
import { useEffect, useState } from "react"

/* creando contexto */
const UserContext = createContext(); 

/* prop por defecto childern : componentes hijos */
const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            name: "Jediael Fernandez",
            registered: "22/09/2022"
        })
    }, []);

    return (
        /* aqui se envia la data que se compartirá con los hijos */
        <UserContext.Provider value={ user }>
            { children }
        </UserContext.Provider>
    )    
}

export { UserContext, UserContextProvider }