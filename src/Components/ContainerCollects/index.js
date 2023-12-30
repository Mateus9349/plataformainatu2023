import { formatarData, formatarReais } from "../../js/valueFormatter";
import ButtonsOptions from "../ButtonsOptions";

import './style.css';

const ContainerCollects = ({ collection, icon }) => {
    return (
        <div className="coleta">
            {collection.map(item => (
                <div key={item.id}>
                    <img id="imagem" src={icon} alt={item.materia_prima} />
                    <p id="nome">{item.materia_prima}</p>
                    <p id="data">{formatarData(item.data_entrada)}</p>
                    <p id="quantidade">{`${item.quantidade} kg`}</p>
                    <p id="preco">{`R$ ${formatarReais(item.valor_pago)}`}</p>
                    <ButtonsOptions/>
                </div>
            ))}
        </div>
    );
};

export default ContainerCollects;
