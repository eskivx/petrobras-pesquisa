import React, { useState, useEffect, useRef } from 'react';
import { pesquisacep, meuCallback } from '../../../../backend/consulta cep';
import { Navbar } from '../../componentes/Navbar';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export function Cadastro() {
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState(''); // State for email
    const [senha, setSenha] = useState(''); // State for senha
    const [mensagem, setMensagem] = useState('');
    const [cepValido, setCepValido] = useState(false); // State to validate CEP
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

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create JSON object with form data
        const formData = {
            email: email,
            senha: senha,
            cep: cep,
            cepvalido: cepValido // Include CEP validation in JSON
        };

        console.log('Form data:', formData);

        // Here you can send the data to the backend or do whatever is necessary
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
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Seu e-mail"
                                            name="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>CEP</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="ex.: 88000-000"
                                            name="cep"
                                            value={cep}
                                            onChange={handleCepChange}
                                            onBlur={handleCepBlur}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Senha</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Sua senha"
                                            name="senha"
                                            value={senha}
                                            onChange={handleSenhaChange}
                                        />
                                    </Form.Group>
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
