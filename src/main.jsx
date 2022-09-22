import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App'
import Home from './componentes/Home'
import _404 from './componentes/error/404'
import { BrowserRouter, Routes, Route } from "react-router-dom"  /* npm add react-router-dom@6 */
import './main.css'
import Criptomonedas from './componentes/cripto/Criptomonedas'
import CriptoPage from './componentes/cripto/details/CriptoPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  /* React router */
  /* BrowserRouter : posibilita el single page app  */
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* usando index permite usar el / */}
        <Route index element={<Home />} />
      </Route>
      <Route path="/criptomonedas" element={<App />}>
        {/* index : /criptomonedas */}
        <Route index element={<Criptomonedas />} />
        <Route path=':id' element={<CriptoPage />} />
      </Route>
      <Route path="*" element={<_404 />} />
    </Routes>
  </BrowserRouter>
)
