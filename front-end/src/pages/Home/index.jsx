import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css';

export function Home() {
  return (
    <div className="tudo">
      <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#373737 !important' }}>
        <div className="container-fluid">
          <Link to="./index.html">
            <div>
              <img className="logo-petro-navbar" src="../images/logo-petrobras.svg" alt="logo petrobras" />
              <img className="logo-nome-navbar" src="../images/nome-petrobras.svg" alt="logo petrobras branco" />
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
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
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
                <li className="nav-item px-2">
                  <Link className="nav-link" to="./index.html">SAIR</Link>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="div-container gradient-background">
        <div className="main-div justified-center my-5 round-corner">
          <div className="container" id="container-home">
            <h1 className="my-4" id="h1-home">Bem-vindo</h1>
            <h2 className="my-4">Ajude sua comunidade!</h2>
            <p className="my-4 paragrafo-home">Queremos saber mais sobre os moradores ao redor dos projetos da Petrobras.</p>
            <p className="my-4 paragrafo-home">Responda as perguntas e contribua para a sua comunidade!</p>
            <Link to="./login.html"><button className="btn btn-dark btn-lg my-5 col-6" style={{ width: '150px' }} type="button">Responder</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

