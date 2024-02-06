import React from 'react';
import styles from './SectionFilters.module.css';

const SectionFilters = ({ icon, nome }) => {
    return (
        <div className={styles.filtro}>
            <div className={styles.tituloForm}>
                <div className={styles.divTitulo}>
                    <img src={icon} alt={`Ícone de ${nome}`} />
                    <h1>{nome}</h1>
                </div>

                <h2>Ordenar por:</h2>

                <form action="" className={styles.formFiltro}>
                    <div>
                        <input type="radio" name="nome" value="alfabetica" />
                        <label>Ordem alfabética</label>
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

            <div className={styles.buscas}>
                <input type="text" />
                <button>Buscar</button>
            </div>
        </div>
    );
}

export default SectionFilters;
