import { Link } from 'react-router-dom';
import './Criptos.css';

function Criptos(props) {
  return (
    <Link to={`/criptomonedas/${props.id}`}>
      <div className='cripto'>
        <h1 className='rank'>{props.rank}</h1>
        <h2>{props.nombre}</h2>
        <div className="info">
          <p><span className="label">Precio:</span> {Number(props.precio).toFixed(4)}</p>
          <p><span className="label">Símbolo: </span> {props.simbolo}</p>
          <p className={parseFloat(props.variacion) > 0 ? 'positivo' : 'negativo'}>
            <span className="label">Variación 24hrs: </span> {Number(props.variacion).toFixed(2)}%
          </p>

        </div>
      </div>
    </Link>
  )
}

export default Criptos