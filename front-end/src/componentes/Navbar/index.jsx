import '../../index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export function Navbar() {

    return(
        // <h1>Oi</h1>
        <div className="tudo">
            <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: '#373737 !important' }}>
            <div className="container-fluid">
            <Link to="/">
                <div>
                <img className="logo-petro-navbar" src={ logo } alt="logo petrobras" />
                <img className="logo-nome-navbar" src={ logo2 } alt="logo petrobras branco" />
                </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <img className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item px-2">
                    <Link className="nav-link" aria-current="page" to="/login">LOGIN</Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/pesquisa">PESQUISA</Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/cadastro">CADASTRO</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PERFIL
                    </Link>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/perfil-acessar">ACESSAR</Link></li>
                    <li><Link className="dropdown-item" to="/perfil-alterar">ALTERAR</Link></li>
                    </ul>
                </li>
                    <li className="nav-item px-2">
                    <Link className="nav-link" to="/">SAIR</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>  
      </div>
    )
}