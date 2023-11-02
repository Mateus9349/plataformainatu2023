import img1 from '../../../assets/img/paper.svg';
import img2 from '../../../assets/img/gears.svg';
import './style.css';

export default function CardsControlesProcesso() {
    return (
        <div className="divEscolheEtapa" >
            <a className="selecionarLoteDeEntrada" href='/selecionarLote'>
                <img src={img1} />
                <h1>Selecionar lote de entrada</h1>
            </a>

            <a className="continuarProcesso" href='/continuarProcesso'>
                <img src={img2} />
                <h1>Continuar Processo</h1>
            </a>
        </div>
    )
}