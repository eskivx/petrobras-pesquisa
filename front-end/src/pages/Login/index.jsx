import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import { Navbar } from '../../componentes/Navbar';
import { Form } from 'react-bootstrap';


export function Login() {

    
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState(''); 
    

   

   

    const teste = () => {

        alert('Usuário cadastrado com sucesso!');
        alert(email)
        alert(senha)
        
       

        setEmail('')
        setSenha('')
       
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
        <div className="tudo div-master">
            <Navbar/>

            <div className="div-container gradient-background div-master">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container py-5" id="container-home">
                        <div className="interior-cadastro">
                            <h1>Login</h1>
                            <form action="/action_page.php">
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
                            </form>
                        </div>
                        <input type="submit" className="btn btn-dark my-5 btn-lg col-6" value="Enviar" style={{ width: '100px' }} onClick={teste} />
                        
                        <Form.Group>
                            <small>Não tem conta?  <Link to="/cadastro">Cadastre-se</Link></small>
                        </Form.Group>
                        
                
                    </div>
                </div>
            </div>

            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script> */}
        </div>
    );
}

