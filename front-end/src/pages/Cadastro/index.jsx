
import React from 'react';
import { useState,useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import {pesquisacep, meuCallback} from '../../../../backend/consulta cep'; 
import { Navbar } from '../../componentes/Navbar';

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
        <div className="tudo div-master">
            <Navbar/>

            <div className="div-container gradient-background div-master">
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
