function CriptoDetails({ cripto }) {

    const parseFloatNumber = (num, dec) => (
        parseFloat(num).toFixed(dec)
    );

    return (
        <div className="cripto-info">
            <div className="main-info">
                <span>Ranking: { cripto.rank }</span>
                <h1>{ cripto.name }</h1>
                <span className="symbol">{ cripto.symbol }</span>
            </div>
            <div className="details">
                <ul>
                    <li className="detail">
                        <span className="label">Precio: </span>
                        <span>{ parseFloatNumber(cripto.priceUsd, 2) }</span>
                    </li>
                    <li className="detail">
                        <span className="label">Max. Suppy: </span>
                        <span>{ parseFloatNumber(cripto.maxSupply, 2) }</span>
                    </li>
                    <li className="detail">
                        <span className="label">Market Cap (USD): </span>
                        <span>{ parseFloatNumber(cripto.marketCapUsd, 2) }</span>
                    </li>
                    <li className="detail">
                        <span className="label">Volumen (USD - 24hrs.): </span>
                        <span>{ parseFloatNumber(cripto.volumeUsd24Hr ) }</span>
                    </li>
                    <li className="detail">
                        <span className="label">Variación (24hrs.): </span>
                        <span> { parseFloatNumber(cripto.changePercent24Hr, 2) } % </span>
                    </li>
                    <li className="detail">
                        <span className="label">Vwap 24hrs.: </span>
                        <span>{ parseFloatNumber(cripto.vwap24Hr, 2) }</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CriptoDetails