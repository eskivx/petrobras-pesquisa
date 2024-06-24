import React, { useState, useEffect,useRef } from 'react';
import { pesquisacep, meuCallback } from '../../../../backend/consulta cep';
import { Navbar } from '../../componentes/Navbar';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export function Cadastro() {
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [cepValido, setCepValido] = useState(false);
    const [emailValido, setEmailValido] = useState(false);
    const [senhaValida, setSenhaValida] = useState(false);
    const [formEnviado, setFormEnviado] = useState(false); // Estado para controlar se o formulário foi enviado
    const [show,setShow]=useState(false)
    const [serverResponse,setServerResponse]=useState('')

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
        const { value } = e.target;
        setEmail(value);
    };

    const handleSenhaChange = (e) => {
        const { value } = e.target;
        setSenha(value);
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormEnviado(true);

        const emailValido = validateEmail(email);
        const cepValido = validateCep(cep);
        const senhaValida = validateSenha(senha);
        
        validarCampos();

       
        if (!emailValido || !cepValido || !senhaValida) {
            return;
        }

        
        const formData = {
            email: email,
            senha: senha,
            cep: cep,
            cepvalido: cepValido,
            respondeu: false
        };



        
        const requestOptions={
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(formData)
        }
        fetch('http://localhost:5000/auth/cadastro', requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServerResponse(data.message);
                setShow(true);
                // if (data.success) {
                //     navigate('/login');
                // }
            })
            .catch(err => console.log(err));
        // navigate('/login')

        

        
        limparFormulario();
    };

    const validarCampos = () => {
        
        setEmailValido(validateEmail(email));
        setCepValido(validateCep(cep));
        setSenhaValida(validateSenha(senha));
    };

    const validateEmail = (email) => {
        
        return email.length > 0; 
    };

    const validateCep = (cep) => {
        
        return cep.length > 0; 
    };

    const validateSenha = (senha) => {
        
        return senha.length >= 6; 
    };

    const limparFormulario = () => {
        setEmail('');
        setSenha('');
        setCep('');
        setFormEnviado(false); 
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
                                    <br></br>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Seu e-mail"
                                            name="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            isInvalid={!validateEmail(email) && formEnviado} 
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, insira um email válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Form.Label>CEP</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="ex.: 88000-000"
                                            name="cep"
                                            value={cep}
                                            onChange={handleCepChange}
                                            onBlur={handleCepBlur}
                                            isInvalid={!cepValido && formEnviado} 
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, insira um CEP válido.
                                        </Form.Control.Feedback>
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
                                            isInvalid={!validateSenha(senha) && formEnviado} 
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, insira uma senha válida.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <p id="rescep">{mensagem}</p>
                                <input type="submit" className="btn btn-dark btn-lg my-5 col-6" value="Enviar" style={{ width: '100px' }} onClick={() => setFormEnviado(true)} />
                                <Form.Group>
                                    <small>Já possui conta?  <Link to="/login">Login</Link></small>
                                </Form.Group>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}   