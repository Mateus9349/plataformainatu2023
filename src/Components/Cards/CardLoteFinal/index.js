import './style.css';
import { iconsInatu } from '../../../js/iconsMateriasPrimas';
import { valoresDaUsina } from '../../../js/padrão';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatarData } from '../../../js/valueFormatter';

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

            <Link to={`/infoProd/${lote.id}`} state={{ lote }}>
              <button id="pdf">
                <img src="URL_DA_IMAGEM" />
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
