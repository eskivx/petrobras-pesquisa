import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import { Navbar } from '../../componentes/Navbar';
import {Pergunta2} from '../Pergunta2'

export function Pesquisa() {
    return (
        <>
        <div className="tudo div-master">
            <Navbar/>
            <div className="div-container gradient-background div-master">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container" id="container-home">
                        <h1 className="my-4" id="h1-home">Pesquisa</h1>
                        <p>Qual é a sua renda mensal?</p>
                        <div>
                            <input type="radio" id="vermelho" name="cor" value="vermelho" />
                            <label htmlFor="vermelho">Acima de sete salários mínimos</label><br />
                        </div>
                        <div>
                            <input type="radio" id="azul" name="cor" value="azul" />
                            <label htmlFor="azul">Acima de cinco salários mínimos</label><br />
                        </div>
                        <div>
                            <input type="radio" id="verde" name="cor" value="verde" />
                            <label htmlFor="verde">Acima de três salários mínimos</label><br />
                        </div>
                        <div>
                            <input type="radio" id="amarelo" name="cor" value="amarelo" />
                            <label htmlFor="amarelo">Acima de um salário mínimo</label><br />
                        </div>
                        <div>
                            <input type="radio" id="roxo" name="cor" value="roxo" />
                            <label htmlFor="roxo">Abaixo de um salário mínimo</label><br />
                        </div>
                        <Link to="/pergunta2"><button className="btn btn-dark btn-lg my-5 col-6" type="button">Responder</button></Link>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </>
    );
}