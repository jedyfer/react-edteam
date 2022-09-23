import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App'
import Home from './componentes/Home'
import _404 from './componentes/error/404'
import { BrowserRouter, Routes, Route } from "react-router-dom"  /* npm add react-router-dom@6 */
import './main.css'
import Criptomonedas from './componentes/cripto/Criptomonedas'
import CriptoPage from './componentes/cripto/details/CriptoPage'
import { UserContextProvider } from './componentes/context/UserContext'
import Perfil from './componentes/perfil/Perfil'
import Login from './componentes/login/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  /* React router */
  /* BrowserRouter : posibilita el single page app  */
  /* UserConextProvider tiene que envolver todos los componentes con los que compartirá la data */
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* usando index permite usar el / */}
          <Route index element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
        <Route path="/criptomonedas" element={<App />}>
          {/* index : /criptomonedas */}
          <Route index element={<Criptomonedas />} />
          <Route path=":id" element={<CriptoPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<_404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
)
