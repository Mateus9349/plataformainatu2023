import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../Components/http";
import { iconsInatuPublic } from '../../js/iconsMateriasPrimas';
import imgExtrativista from '../../assets/img/extrativista.svg';
import imgLocation from '../../assets/img/localizacao.jpg';


import MapComponent from "../../Components/MapComponent";
import OpenLayersMap from "../../Components/OpenLayersMap";

import './style.css'

const InfoLote = () => {

    const { id } = useParams();
    const [produto, setProduto] = useState('');
    const [locais, setLocais] = useState([]);
    const [extrativistas, setExtrativistas] = useState([]);

    const position = [51.505, -0.09]; // Posição inicial do mapa (latitude, longitude)
    const points = [
        { id: 1, position: [51.505, -0.09], name: 'Ponto 1' },
        { id: 2, position: [51.515, -0.10], name: 'Ponto 2' },
        // Adicione mais pontos conforme necessário
    ];

    useEffect(() => {
        http.get(`loteFinal/${id}`).then(res => {
            setProduto(res.data.produto);
            setLocais(res.data.local.split(','));
            setExtrativistas(res.data.extrativistas.split(','));
        }).catch(error => {
            alert(`Error: ${error}`);
        });
    }, [])

    return (
        <>

            <div className="container-info-lote">
                <div className="info-produto">
                    <h1>{produto}</h1>
                    <img src={iconsInatuPublic[produto]} alt={produto} />
                </div>

                <div className="info-locais">
                    <MapComponent position={position} points={points}/>
                    <h1>Locais de coleta:</h1>
                    {locais.map(item => (
                        <h1 key={item}>{item}</h1>
                    ))}
                </div>

                <div className="info-extrativistas">
                    <img src={imgExtrativista} />
                    <h1>Extrativistas:</h1>
                    {extrativistas.map(item => (
                        <h1 key={item}>{item}</h1>
                    ))}
                </div>
            </div>
        </>
    )
}

export default InfoLote;