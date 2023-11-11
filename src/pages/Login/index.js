import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';

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

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

const Login = () => {
    const { id } = useParams();
    const [img, setImg] = useState(ASAGA);
    const [background, setBackground] = useState();

    useEffect(() => {
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



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    function handleSingIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <p>carregando...</p>
    }
    if(user){
        return console.log(user)
    }

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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="input1"
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="esqueci-minha-senha">Esqueci minha senha</label>
                        </div>
                        <div className="cta" data-btn_entrar>
                            <a className="entrar-btn" href="">
                                <div onClick={handleSingIn} className="entrar">
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

