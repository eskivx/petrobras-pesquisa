import React, { useState, useEffect, useRef } from 'react';
import { pesquisacep, meuCallback } from '../../../../backend/consulta cep';
import { Navbar } from '../../componentes/Navbar';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import { Link } from 'react-router-dom';

export function Cadastro() {
    const [cep, setCep] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [cepValido, setCepValido] = useState(false); // Estado para validar CEP
    const rescepRef = useRef(null);

    useEffect(() => {
        window.handleCallback = (conteudo) => meuCallback(conteudo, setMensagem, setCepValido);
    }, []);

    const handleCepChange = (e) => {
        setCep(e.target.value);
    };

    const handleCepBlur = () => {
        pesquisacep(cep, setCep, setMensagem);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Criar objeto JSON com os dados do formulário
        const formData = {
            email: e.target.email.value,
            senha: e.target.senha.value,
            cep: cep,
            cepvalido: cepValido // Inclui a validação do CEP no JSON
        };

        console.log('Dados do formulário:', formData);

        // Aqui você pode enviar os dados para o backend ou fazer o que for necessário
    };

    return (
        <div className="tudo">
            <Navbar />

            <div className="div-container gradient-background div-master">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container py-5" id="container-home">
                        <div className="interior-cadastro">
                            <h1>Cadastro</h1>
                            <form onSubmit={handleSubmit}>
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
                                <p ref={rescepRef} id="rescep">{mensagem}</p>
                                <input type="submit" className="btn btn-dark btn-lg my-5 col-6" value="Enviar" style={{ width: '100px' }} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
