import React from 'react';

function Pesquisa() {
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
                        <ul className="navbar-nav ">
                            <li className="nav-item px-2">
                                <a className="nav-link" aria-current="page" href="./login.html">LOGIN</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" aria-current="page" href="./index.html">HOME</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link active" href="./pesquisa.html">PESQUISA</a>
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
                                    <a className="nav-link" href="#">SAIR</a>
                                </li>
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

export default Pesquisa;