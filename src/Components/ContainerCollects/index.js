import { formatarData, formatarReais } from "../../js/valueFormatter";
import ButtonsOptions from "../ButtonsOptions";

import styles from './ContainerCollects.module.css';

const ContainerCollects = ({ collection, icon }) => {
    return (
        <div className={styles.containerColeta}>
            {collection.map(item => (
                <div>
                    <div className={styles.coleta} key={item.id}>
                        <img id={styles.imagem} src={icon} alt={item.materia_prima} />
                        <p id={styles.extrativista}>{item.extrativista}</p>
                        <p id={styles.nome}>{item.materia_prima}</p>
                        <p id={styles.data}>{formatarData(item.data_entrada)}</p>
                        <p id={styles.quantidade}>{`${item.quantidade} kg`}</p>
                        <p id={styles.preco}>{`${formatarReais(item.valor_pago)}`}</p>
                    </div>
                    <ButtonsOptions/>
                </div>
            ))}
        </div>
    );
};

export default ContainerCollects;
