import { useParams } from "react-router-dom"
import usePetition from "../../../hooks/usePetition";
import CriptoInfo from "./CriptoInfo";
import CriptoHistory from "./CriptoHistory";
import "./CriptoPage.css"

function CriptoPage() {
    /* devuelve los parametros que estan en la url */
    const params = useParams();

    /* hook propio : usePetition */
    const [cripto, loadingCripto] = usePetition(`assets/${params.id}`);
    const [history, loadingHistory] = usePetition(`assets/${params.id}/history?interval=d1`);

    /* 1 solucion para el undefined del estado */
    //  if (!cripto || !history) return <span>Cargando...</span>

    if (loadingCripto || loadingHistory) return <span>Cargando...</span>

    return (
        <div className="cripto-page-container">
            {/* 2 solucion : render condicional si existe cripto */}
            { cripto && (<CriptoInfo cripto={ cripto }/>) }
            { history && (<CriptoHistory history={ history } />) }
        </div>
    )
}

export default CriptoPage