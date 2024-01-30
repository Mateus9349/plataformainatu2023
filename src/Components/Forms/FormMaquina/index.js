import React, { useState } from 'react';
import http from '../../http';

const FormMaquina = () => {
    const [nome, setNome] = useState('');
    const [tipoMaquina, setTipoMaquina] = useState('higienizadora');
    const [energia, setEnergia] = useState('kw');
    const [potencia, setPotencia] = useState('');
    const [valor, setValor] = useState('');
    const [dataAquisicao, setDataAquisicao] = useState('');
    const [vidaUtil, setVidaUtil] = useState('');
    const [diasTrabalhados, setDiasTrabalhados] = useState('');
    const [horasTrabalhadas, setHorasTrabalhadas] = useState('');

    const cadastrar = () => {

        const formData = {
            nome: nome,
            tipo_processo: tipoMaquina,
            fonte_energia: energia,
            potencia: potencia,
            valor: valor,
            data_aquisicao: dataAquisicao,
            vida_util: vidaUtil,
            dias_utilizados: diasTrabalhados,
            horas_trabalhadas: horasTrabalhadas
        };

        http.post('/maquinas', formData)
            .then(res => {
                console.log('Formulário enviado com sucesso:', res.data);
            })
            .catch(error => {
                console.error('Erro ao enviar formulário:', error);
                alert('Operação não realizada!');
            });
    }

    return (
        <div className="maquinario-cadastro-inativo div-form">
            <form action="" className="extra alinhar-horizontal-form-maquinas">

                <div>
                    <label>Nome:</label>
                    <input type="text" placeholder="Insira seu nome" onChange={(e) => setNome(e.target.value)} />

                    <label>Tipo da máquina</label>
                    <select onChange={(e) => setTipoMaquina(e.target.value)}>
                        <option value="higienizadora">Higienizadora</option>
                        <option value="seletora">Seletora</option>
                        <option value="quebradora">Quebradora</option>
                        <option value="secadora">Secadora</option>
                        <option value="despolpadora">Despolpador</option>
                        <option value="destiladora">Destiladora</option>
                        <option value="trituradora">Trituradora</option>
                        <option value="prensa">Prensa</option>
                        <option value="filtro">Filtro</option>
                    </select>

                    <label>Energia</label>
                    <select onChange={(e) => setEnergia(e.target.value)}>
                        <option value="kw">Rede Elétrica</option>
                        <option value="diesel">Motor Estacionário</option>
                    </select>

                    <label>Potência</label>
                    <input type="number" placeholder="kW" onChange={(e) => setPotencia(e.target.value)} />

                    <label>Valor</label>
                    <input type="number" placeholder="0,00 R$" onChange={(e) => setValor(e.target.value)} />
                </div>

                <div>
                    <label>Data de Aquisição</label>
                    <input type="date" onChange={(e) => setDataAquisicao(e.target.value)} />

                    <label>Vida Útil</label>
                    <input type="number" onChange={(e) => setVidaUtil(e.target.value)} />

                    <label>Dias trabalhados</label>
                    <input type="number" onChange={(e) => setDiasTrabalhados(e.target.value)} />

                    <label>Horas trabalhadas</label>
                    <input type="number" onChange={(e) => setHorasTrabalhadas(e.target.value)} />

                    <button type="submit" onClick={cadastrar}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default FormMaquina;
