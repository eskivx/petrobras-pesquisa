import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../componentes/Navbar';
import { Form } from 'react-bootstrap';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: email,
            senha: senha
            
        };

        console.log('Form data:', formData);
   

        navigate('/')
    };

 

    return (
        <div className="tudo div-master">
            <Navbar />

            <div className="div-container gradient-background div-master">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container py-5" id="container-home">
                        <div className="interior-cadastro">
                            <h1>Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="formulario">
                                    <br></br>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="ex.: fulano@email.com"
                                            name="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </Form.Group>
                                    <br></br>
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
                                <input
                                    type="submit"
                                    className="btn btn-dark my-5 btn-lg col-6"
                                    value="Enviar"
                                    style={{ width: '100px' }}
                                    
                                />
                            </form>
                            <Form.Group>
                                <small>
                                    Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
                                </small>
                            </Form.Group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
