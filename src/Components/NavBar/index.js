import React from 'react';
import './style.css'
import logoInatu from '../../assets/img/logoInatu.svg';

export default function NavBar() {
    return (
        <header>
            <a href="/">
                <img src={logoInatu} alt="logo-inatu" className="logo" />
            </a>
            <nav className="navbar">
                <a className="link link-cadastro" href="/cadastro">Cadastros</a>
                <a className="link link-coletas" href="/coletas">Coletas</a>
                <a className="link link-processos" href="/processos">Processamento</a>
                <a className="link link-lotes" href="/lotes">Lotes</a>
                <a className="link link-vendas" href="#">Vendas</a>
            </nav>
        </header>
    )
}