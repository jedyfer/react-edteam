import { parseFloatNumber } from "../../../helpers/numbers"

function CriptoHistory({ history }) {
    return (
        <div className="cripto-history" style={{ padding: "1.5rem 0" }}>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {/* La función reverse() muestra en orden descendente */}
                    { history.reverse().map(({ date, priceUsd }, i) => (
                        <tr key={i}>
                            <td className="label">{ new Date(date).toDateString() }</td>
                            <td className="price">$ { parseFloatNumber(priceUsd, 2) } </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CriptoHistory