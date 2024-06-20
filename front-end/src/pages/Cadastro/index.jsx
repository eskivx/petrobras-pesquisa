
import React from 'react';
import { useState,useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import {pesquisacep, meuCallback} from '../../../../backend/consulta cep'; 

export function Cadastro() {

    const [cep, setCep] = useState('');
    const [mensagem, setMensagem] = useState('');
    const rescepRef = useRef(null);

    useEffect(() => {
        window.handleCallback = (conteudo) => meuCallback(conteudo, setMensagem);
    }, []);

    const handleCepChange = (e) => {
        setCep(e.target.value);
    };

    const handleCepBlur = () => {
        pesquisacep(cep, setCep, setMensagem);
    };
    return (
        <div className="tudo">
            <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#373737 !important' }}>
                <div className="container-fluid">
                    <a href="./index.html">
                        <div>
                            <img className="logo-petro-navbar" src={logo} alt="logo petrobras" />
                            <img className="logo-nome-navbar" src={logo2} alt="logo petrobras branco" />
                        </div>
                    </a>
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
                                <Link className="nav-link" to="/pesquisa">PESQUISA</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link active" to="/cadastro">CADASTRO</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PERFIL
                                </Link>
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
                            <h1>Cadastro</h1>
                            <form action="/action_page.php">
                                <div className="formulario">
                                    <div>
                                        <label htmlFor="email">E-mail:</label>
                                        <input type="text" id="email" name="email" required /><br /><br />
                                    </div>
                                    <div>
                                        <label htmlFor="cep">CEP:</label>
                                        <input
                                            type="text"
                                            id="cep"
                                            name="cep"
                                            required
                                            value={cep}
                                            onChange={handleCepChange}
                                            onBlur={handleCepBlur}
                                        /><br /><br />
                                    </div>
                                    <div>
                                        <label htmlFor="senha">Senha:</label>
                                        <input type="password" id="senha" name="senha" required /><br /><br />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <p ref={rescepRef} id="rescep">{mensagem}</p>
                        <input type="submit" className="btn btn-dark btn-lg my-5 col-6" value="Enviar" style={{ width: '100px' }} />
                    </div>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </div>
    );
}
