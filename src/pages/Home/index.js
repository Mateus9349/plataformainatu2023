import NavBar from "../../Components/NavBar";
import SectionProcessoInacabadoHome from "../../Components/SectionProcessoInacabadoHome";
import './style.css';
import { useState, useEffect } from 'react';
import http from '../../Components/http/index.js';

export default function Home() {
  const [dadosDoBanco, setDados] = useState([]);

  useEffect(() => {
    http.get('processos')
      .then(res => {
        setDados(res.data);
      });
  }, []); // Adicione um array vazio como segundo argumento

  return (
    <>
      <NavBar />
      <SectionProcessoInacabadoHome
        dadosDoBanco={dadosDoBanco}
      />
    </>
  );
}

