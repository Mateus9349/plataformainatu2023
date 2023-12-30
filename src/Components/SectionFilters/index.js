import './style.css';

const SectionFilters = ({ icon, nome }) => {
    return (
        <div className="filtro">
            <div className="titulo-form">
                <div className="div-titulo">
                    <img src={icon} />
                    <h1>{nome}</h1>
                </div>

                <h2>Ordenar por:</h2>

                <form action="" className="form-filtro">
                    <div>
                        <input type="radio" name="nome" value="alfabetica" />
                        <label>Ordem alfabetica</label>
                    </div>
                    <div>
                        <input type="radio" name="nome" value="data" />
                        <label>Data</label>
                    </div>
                    <div>
                        <input type="radio" name="nome" value="quantidade" />
                        <label>Quantidade Kg</label>
                    </div>
                    <div>
                        <input type="radio" name="nome" value="preco" />
                        <label>Valor pago</label>
                    </div>
                </form>
            </div>

            <div className="buscas">
                <input type="text"/>
                <button>Buscar</button>
            </div>
        </div>
    )
}

export default SectionFilters;