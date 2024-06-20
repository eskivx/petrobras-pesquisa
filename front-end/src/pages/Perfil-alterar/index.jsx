import React from 'react';
import { Link } from 'react-router-dom';

export function Perfil_alterar() {
  return (
    <div className="tudo">
      {/* Navbar */}
      <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#373737 !important' }}>
        <div className="container-fluid">
          <a href="./index.html">
            <div>
              <img className="logo-petro-navbar" src="../images/logo-petrobras.svg" alt="logo petrobras" />
              <img className="logo-nome-navbar" src="../images/nome-petrobras.svg" alt="logo petrobras branco" />
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
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
                <a className="nav-link" href="./pesquisa.html">PESQUISA</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="./cadastro.html">CADASTRO</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PERFIL
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="./perfil-acessar.html">ACESSAR</a></li>
                  <li><a className="dropdown-item" href="./perfil-alterar.html">ALTERAR</a></li>
                </ul>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">SAIR</a>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div className="div-container gradient-background">
        <div className="main-div justified-center my-5 round-corner">
          <div className="container py-5" id="container-home">
            <div className="interior-cadastro">
              <h1>Cadastro</h1>
              <form action="/action_page.php">
                <div className="formulario">
                  <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" /><br /><br />
                  </div>
                  <div>
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" id="sobrenome" name="sobrenome" /><br /><br />
                  </div>
                  <div>
                    <label htmlFor="datanasc">Data nascimento:</label>
                    <input type="text" id="datanasc" name="datanasc" /><br /><br />
                  </div>
                  <div>
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" /><br /><br />
                  </div>
                  <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" id="email" name="email" /><br /><br />
                  </div>
                  <div>
                    <label htmlFor="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" /><br /><br />
                  </div>
                  <div>
                    <label htmlFor="genero">Gênero:</label>
                    <input type="text" id="genero" name="genero" /><br /><br />
                  </div>
                </div>
                <input type="submit" className="btn btn-dark btn-lg my-5 col-6" value="Enviar" style={{ width: '100px' }} />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scripts */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </div>
  );
}
