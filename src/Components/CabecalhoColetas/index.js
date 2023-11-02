const CabecalhoColetas = ({mostrarform}) => {
    return (
        <>
            <section>
                <h1>Coletas</h1>
                <div>
                    <button onClick={() => mostrarform()} className="bt">Receber coleta</button>
                    <a href="/coletasRecebidas">
                        <button className="bt">Coletas recebidas</button>
                    </a>
                </div>
            </section>
        </>
    )
}

export default CabecalhoColetas;