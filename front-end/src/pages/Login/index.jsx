import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../componentes/Navbar';
import { Form, FloatingLabel, Alert } from 'react-bootstrap';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import { login } from '../../auth';



export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailValido, setEmailValido] = useState(false);
    const [senhaValida, setSenhaValida] = useState(false);
    const [formEnviado, setFormEnviado] = useState(false); // Estado para controlar se o formulário foi enviado
    const [show, setShow] = useState(false)
    const [serverResponse, setServerResponse] = useState('')
    const [alertVariant, setAlertVariant] = useState('')
    const navigate = useNavigate();


    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    };

    const handleSenhaChange = (e) => {
        const { value } = e.target;
        setSenha(value);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setFormEnviado(true);
        const emailValido = validateEmail(email);
        const senhaValida = validateSenha(senha);
        

        validarCampos();

        if (!emailValido || !senhaValida) {
            return;
        }

        const formData = {
            email: email,
            senha: senha
            
        };


        const requestOptions = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        fetch('http://localhost:5000/auth/login', requestOptions)
        .then(async res => {
            const data = await res.json();
            if (res.ok) {
                setServerResponse(data.mensagem);
                setAlertVariant('success');
                login(data.access_token, data.refresh_token, email); // chamando a função login do auth.js
                console.log(data.access_token, email);
                navigate('/');
            } else {
                setServerResponse(data.mensagem || 'Erro ao enviar');
                setAlertVariant('danger');
            }
            setShow(true);
        })
        .catch(err => {
            console.error('erro', err);
            setServerResponse('Erro ao enviar');
            setAlertVariant('danger');
            setShow(true);
        });
};

    const validarCampos = () => {

        setEmailValido(validateEmail(email));
        setSenhaValida(validateSenha(senha));
    };

    const validateEmail = (email) => {

        return email.length > 0;
    };

    const validateSenha = (senha) => {

        return senha.length > 0;
    };

  


    return (
        <div className="tudo div-master">
            <Navbar />

            <div className="div-container gradient-background div-master">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container py-5" id="container-home">
                    {show ?
                            <>
                                <Alert key={alertVariant} variant={alertVariant}>
                                    <p>{serverResponse}</p>
                                    {alertVariant === 'danger' && (
            <>
                <Alert.Link href="/cadastro">Mude sua senha</Alert.Link>
                {' ou '}
                <Alert.Link href="/cadastro">crie uma conta</Alert.Link>
            </>
        )}
                                    {alertVariant === 'success' && <Alert.Link href="/cadastro">Sucesso</Alert.Link>}
                                </Alert>
                            </> :
                            <h1>Login</h1>
                        }
                        <div className="interior-cadastro">
                            
                            <form onSubmit={handleSubmit}>
                                <div className="formulario">
                                    <br></br>
                                    <Form.Group>
                                    <Form.Floating className="mb-3">
      
                                        <Form.Control
                                            id="floatEmail"
                                            type="email"
                                            placeholder="email"
                                            name="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            isInvalid={!validateEmail(email) && formEnviado}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, insira um email.
                                        </Form.Control.Feedback>
                                        <label htmlFor="floatEmail">Email</label>
                                        </Form.Floating>
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Form.Floating>
                                        <Form.Control
                                            id="floatSenha"
                                            type="password"
                                            placeholder="senha"
                                            name="senha"
                                            value={senha}
                                            onChange={handleSenhaChange}
                                            isInvalid={!validateSenha(senha) && formEnviado}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, insira uma senha.
                                        </Form.Control.Feedback>
                                        <label htmlFor="floatSenha">Senha</label>
                                        </Form.Floating>
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
