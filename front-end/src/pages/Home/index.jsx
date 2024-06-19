// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="tudo">
      <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#373737 !important' }}>
        <div className="container-fluid">
          <a href="./index.html">
            <div>
              <img className="logo-petro-navbar" src="../images/logo-petrobras.svg" alt="logo petrobras" />
              <img className="logo-nome-navbar" src="../images/nome-petrobras.svg" alt="logo petrobras branco" />
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <img className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="./login.html">LOGIN</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link active" aria-current="page" href="./index.html">HOME</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="./pesquisa.html">PESQUISA</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="./cadastro.html">CADASTRO</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PERFIL
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="./perfil-acessar.html">ACESSAR</a></li>
                  <li><a className="dropdown-item" href="./perfil-alterar.html">ALTERAR</a></li>
                </ul>
                <li className="nav-item px-2">
                  <a className="nav-link" href="./index.html">SAIR</a>
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
            <a href="./login.html"><button className="btn btn-dark btn-lg my-5 col-6" style={{ width: '150px' }} type="button">Responder</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
