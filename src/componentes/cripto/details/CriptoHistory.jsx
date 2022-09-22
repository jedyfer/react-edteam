function CriptoHistory({ history }) {
    const parseToDate = (d) => {
        const date = new Date(d);

        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }

    return (
        <div className="cripto-history" style={{ padding: "1.5rem 0" }}>
            <table>
                <thead>
                    <tr>
                        <th>Precio</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {/* La función reverse() muestra en orden descendente */}
                    { history.reverse().map(({ date, priceUsd }, i) => (
                        <tr key={i}>
                            <td className="price">{ parseFloat(priceUsd).toFixed(2) }</td>
                            <td className="label">{ new Date(date).toDateString() }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CriptoHistory