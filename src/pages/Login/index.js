import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import http from '../../Components/http';

import inatu from '../../assets/log/inatu.svg';
import ASAGA from '../../assets/log/asaga.svg';
import ASPACS from '../../assets/log/aspacs.svg';
import APADRIT from '../../assets/log/apadrit.svg';
import APFOV from '../../assets/log/apfov.svg';
import RDS from '../../assets/log/rds.svg';

import BackASAGA from '../../assets/telas/asaga.png';
import BackASPACS from '../../assets/telas/aspacs.png';
import BackAPADRIT from '../../assets/telas/apadrit.png';
import BackAPFOV from '../../assets/telas/apfov.png';
import BackRDS from '../../assets/telas/rds.png';

const Login = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [img, setImg] = useState(ASAGA);
    const [background, setBackground] = useState();
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        sessionStorage.clear();

        const config = {
            1: { img: ASAGA, background: BackASAGA, baseURL: 'https://api.plataformainatu.com.br:4001/' },
            2: { img: ASPACS, background: BackAPADRIT, baseURL: 'https://api.plataformainatu.com.br:5001/' },
            3: { img: APADRIT, background: BackASPACS, baseURL: 'https://api.plataformainatu.com.br:6501/' },
            4: { img: APFOV, background: BackAPFOV, baseURL: 'https://api.plataformainatu.com.br:7001/' },
            5: { img: RDS, background: BackRDS, baseURL: 'https://api.plataformainatu.com.br:8001/' },
        };

        if (config[id]) {
            const { img, background, baseURL } = config[id];
            setImg(img);
            setBackground(background);
            sessionStorage.setItem('baseURL', baseURL);
        }
    }, [id]);

    const LoginUser = async (e) => {
        e.preventDefault();

        try {
            const res = await http.get('logins');
            const userFound = res.data.find(item => item.nome === user && item.senha === senha);

            if (userFound) {
                navigate('/')
            } else {
                alert('Usuário ou senha incorretos!');
                window.location.reload();
            }
        } catch (error) {
            console.error('Erro durante a solicitação:', error);
        }
    };

    return (
        <>
            <article className="desktop-7">
                <section className="content">
                    <div className="banner" style={{ backgroundImage: `url(${background})` }}>
                        <img className="inatu-icon" alt="" src={inatu} />
                        <img className="asaga-icon" alt="" src={img} />
                    </div>

                    <div className="main">
                        <h2 className="insira-seus-dados">Insira seus dados</h2>
                        <div className="inputs">
                            <input
                                className="input"
                                type="text"
                                placeholder="CPF / CNPJ"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                            <input
                                className="input1"
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <label className="esqueci-minha-senha">Esqueci minha senha</label>
                        </div>
                        <div className="cta" data-btn_entrar>
                            <a className="entrar-btn" href="">
                                <div onClick={LoginUser} className="entrar">
                                    Entrar
                                </div>
                            </a>
                            <label className="v22-idesam">V2.2 © Idesam 2023</label>
                        </div>
                        <a className="cadastrar-se">Cadastrar-se</a>
                    </div>
                </section>
            </article>
        </>
    );
};

export default Login;

