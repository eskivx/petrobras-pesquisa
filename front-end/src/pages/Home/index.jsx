import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import { Navbar } from '../../componentes/Navbar'
import '../../index.css'

export function Home() {
  return (
      <>
      <Navbar/>
      <div className="tudo">
      <div className="div-container gradient-background">
        <div className="main-div justified-center my-5 round-corner">
          <div className="container" id="container-home">
            <h1 className="my-4" id="h1-home">Bem-vindo</h1>
            <h2 className="my-4">Ajude sua comunidade!</h2>
            <p className="my-4 paragrafo-home">Queremos saber mais sobre os moradores ao redor dos projetos da Petrobras.</p>
            <p className="my-4 paragrafo-home">Responda as perguntas e contribua para a sua comunidade!</p>
            <Link to="/login"><button className="btn btn-dark btn-lg my-5 col-6" style={{ width: '150px' }} type="button">Responder</button></Link>
          </div>
        </div>
      </div>
      </div>
      </>
  );
}

