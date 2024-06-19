import React from 'react';
import './style.css'; 

function Login() {
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
                                <a className="nav-link active" aria-current="page" href="./login.html">LOGIN</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" aria-current="page" href="./index.html">HOME</a>
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
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#">SAIR</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="div-container gradient-background">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container py-5" id="container-home">
                        <div className="interior-cadastro">
                            <h1>Login</h1>
                            <form action="/action_page.php">
                                <div className="formulario">
                                    <div>
                                        <label htmlFor="usuario">Usuário:</label>
                                        <input type="text" id="usuario" name="usuario" /><br /><br />
                                    </div>
                                    <div>
                                        <label htmlFor="senha">Senha:</label>
                                        <input type="password" id="senha" name="senha" /><br /><br />
                                    </div>
                                    <a href="">Esqueceu sua senha?</a>
                                </div>
                            </form>
                        </div>
                        <input type="submit" className="btn btn-dark my-5 btn-lg col-6" value="Enviar" style={{ width: '100px' }} />
                        <div>
                            <p>Não tem senha?</p>
                            <a href="./cadastro.html"><input className="btn btn-secondary btn-lg col-6" style={{ width: '150px' }} value="Cadastre-se" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </div>
    );
}

export default Login;