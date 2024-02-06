import pagar from '../../assets/img/icon-pagar.svg';
import editar from '../../assets/img/icon-editar.svg';
import deletar from '../../assets/img/icon-deletar.svg';

import styles from './ButtonsOptions.module.css';

const ButtonsOptions = () => {
    return (
        <div className={styles.btns_icon}>
            <button className={styles.btns}>
                <img src={editar} alt="icon-editar" title="editar"/>
            </button>
            <button className={styles.btns}>
                <img src={deletar} alt="icon-deletar" title="deletar"/>
            </button>
        </div>
    )
}

export default ButtonsOptions;