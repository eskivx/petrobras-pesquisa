import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import { Navbar } from '../../componentes/Navbar';

export function Login() {
    return (
        <div className="tudo div-master">
            <Navbar/>

            <div className="div-container gradient-background div-master">
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
                                    <Link to="">Esqueceu sua senha?</Link>
                                </div>
                            </form>
                        </div>
                        <input type="submit" className="btn btn-dark my-5 btn-lg col-6" value="Enviar" style={{ width: '100px' }} />
                        <div>
                            <p>Não tem senha?</p>
                            <Link to="/cadastro"><input className="btn btn-secondary btn-lg col-6" style={{ width: '150px' }} value="Cadastre-se" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </div>
    );
}

