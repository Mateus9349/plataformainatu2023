import pagar from '../../assets/img/icon-pagar.svg';
import editar from '../../assets/img/icon-editar.svg';
import deletar from '../../assets/img/icon-deletar.svg';

import './style.css';

const ButtonsOptions = () => {
    return (
        <div className="btns-icon">
            <button className="btns">
                <img src={pagar} alt="icon-depreciacao" title="pagar"/>
            </button>
            <button className="btns">
                <img src={editar} alt="icon-editar" title="editar"/>
            </button>
            <button className="btns">
                <img src={deletar} alt="icon-deletar" title="deletar"/>
            </button>
        </div>
    )
}

export default ButtonsOptions;