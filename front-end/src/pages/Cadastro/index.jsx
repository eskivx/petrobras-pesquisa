import React, { useState, useEffect, useRef } from 'react';
import { pesquisacep, meuCallback } from '../../../../backend/consulta cep';
import { Navbar } from '../../componentes/Navbar';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FloatingLabel, Alert } from 'react-bootstrap';

export function Cadastro() {
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [cepValido, setCepValido] = useState(false);
    const [emailValido, setEmailValido] = useState(false);
    const [senhaValida, setSenhaValida] = useState(false);
    const [formEnviado, setFormEnviado] = useState(false); // Estado para controlar se o formulário foi enviado
    const [show, setShow] = useState(false)
    const [serverResponse, setServerResponse] = useState('')
    const [alertVariant, setAlertVariant] = useState('')

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




        const requestOptions = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        fetch('http://localhost:5000/auth/cadastro', requestOptions)
            .then(async res => {
                const data = await res.json();
                if (res.ok) {
                    setServerResponse(data.mensagem);
                    setAlertVariant('success');
                    limparFormulario();
                    // navigate('/login');
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
    <div className="tudo div-master">
        <Navbar />

        <div className="div-container gradient-background div-master">
            <div className="main-div justified-center my-5 round-corner">
                <div className="container py-5" id="container-home">
                {show ?
                            <>
                                <Alert key={alertVariant} variant={alertVariant}>
                                    <p>{serverResponse}</p>
                                    {alertVariant === 'success' && <Alert.Link href="/login">Faça Login!</Alert.Link>}
                                </Alert>
                            </> :
                            <h1>Cadastro</h1>
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
                                            placeholder="e-mail"
                                            name="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            isInvalid={!validateEmail(email) && formEnviado}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, insira um email válido.
                                        </Form.Control.Feedback>
                                        <label htmlFor="floatingInputCustom">Email</label>
                                    </Form.Floating>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Floating>
                                        <Form.Control
                                            id="floatCep"
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
                                        <label htmlFor="floatCep">CEP  ex.: 88000-000</label>
                                    </Form.Floating>
                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <Form.Floating>
                                        <Form.Control
                                            id="floatSenha"
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
                                        <label htmlFor="floatSenha">Senha</label>
                                    </Form.Floating>
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