import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';

export function Pesquisa() {
    return (
        <div className="tudo">
            <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: '#373737 !important' }}>
                <div className="container-fluid">
                    <Link to="/">
                        <div>
                            <img className="logo-petro-navbar" src={logo} alt="logo petrobras" />
                            <img className="logo-nome-navbar" src={logo2} alt="logo petrobras branco" />
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <img className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item px-2">
                                 <Link className="nav-link" aria-current="page" to="/login">LOGIN</Link>
                            </li>
                            <li className="nav-item px-2">
                                  <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link active" to="/pesquisa">PESQUISA</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link" to="/cadastro">CADASTRO</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PERFIL
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="perfil-acessar">ACESSAR</Link></li>
                                    <li><Link className="dropdown-item" to="perfil-alterar">ALTERAR</Link></li>
                                </ul>
                            </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link" to="/">SAIR</Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="div-container gradient-background">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container" id="container-home">
                        <h1 className="my-4" id="h1-home">Pesquisa</h1>
                        <p>Qual é a sua renda mensal?</p>
                        <div>
                            <input type="radio" id="vermelho" name="cor" value="vermelho" />
                            <label htmlFor="vermelho">Acima de sete salários mínimos</label><br />
                        </div>
                        <div>
                            <input type="radio" id="azul" name="cor" value="azul" />
                            <label htmlFor="azul">Acima de cinco salários mínimos</label><br />
                        </div>
                        <div>
                            <input type="radio" id="verde" name="cor" value="verde" />
                            <label htmlFor="verde">Acima de três salários mínimos</label><br />
                        </div>
                        <div>
                            <input type="radio" id="amarelo" name="cor" value="amarelo" />
                            <label htmlFor="amarelo">Abaixo de três salários mínimos</label><br />
                        </div>
                        <button className="btn btn-dark btn-lg my-5 col-6" type="button">Responder</button>
                    </div>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </div>
    );
}