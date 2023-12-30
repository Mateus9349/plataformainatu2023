import './style.css';
import { iconsInatu } from '../../../js/iconsMateriasPrimas';
import { valoresDaUsina } from '../../../js/padrão';
import { Link } from 'react-router-dom';
import { formatarData } from '../../../js/valueFormatter';


import { TbInfoOctagonFilled } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { MdQrCodeScanner } from "react-icons/md";


export default function CardLoteFinal({ lotes }) {
  const formataNomeProduto = (produto) => {
    return produto.replace(/ /g, '_');
  };

  return (
    <div>
      {lotes.map((lote) => {
        const usina = valoresDaUsina(lote.produto);
        const valorTotal = lote.quantidade * usina.valor;

        return (
          <div className='card-lote' key={lote.id}>
            <img id="img" src={iconsInatu[formataNomeProduto(lote.produto)]} />
            <p id="produto" className="text">
              <span>{lote.produto}</span>
            </p>
            <p id="data" className="text">
              <span>{formatarData(lote.createdAt)}</span>
            </p>

            <div className='subDivisor'>
              <p id="associacao" className="text">APFOV</p>
              <p id="quantidade" className="text">
                <span>{lote.quantidade}</span> Kg
              </p>
            </div>

            <div>
              <p id="valor" className="text">
                Valor L: R$ <span>{usina.valor}</span>
              </p>
              <p id="total" className="text">
                Valor total: R$ <span>{valorTotal}</span>
              </p>
            </div>

            <div className='links-lote-final'>
              <Link to={`/infoLote/${lote.id}`}>
                {/* <button id="pdf"> */}
                <TbInfoOctagonFilled style={{ color: 'black' }} />
                {/* </button> */}
              </Link>
              <Link to={`/infoProd/${lote.id}`} state={{ lote }}>
                <FcStatistics style={{ color: 'black' }} />
              </Link>
              <Link>
                <MdQrCodeScanner style={{ color: 'black' }} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
