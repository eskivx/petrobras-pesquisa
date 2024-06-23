import '../../index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export function Pergunta3() {
    return (
            <div className="div-container gradient-background div-master">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container" id="container-home">
                        <h1 className="my-4" id="h1-home">Pesquisa</h1>
                        <p>O quão perto você mora de um projeto da Petrobras?</p>
                        <div>
                            <input type="radio" id="vermelho" name="cor" value="vermelho" />
                            <label htmlFor="vermelho">Muito perto</label><br />
                        </div>
                        <div>
                            <input type="radio" id="azul" name="cor" value="azul" />
                            <label htmlFor="azul">Perto</label><br />
                        </div>
                        <div>
                            <input type="radio" id="verde" name="cor" value="verde" />
                            <label htmlFor="verde">Razoável</label><br />
                        </div>
                        <div>
                            <input type="radio" id="amarelo" name="cor" value="amarelo" />
                            <label htmlFor="amarelo">Longe</label><br />
                        </div>
                        <div>
                            <input type="radio" id="roxo" name="cor" value="roxo" />
                            <label htmlFor="roxo">Muito longe</label><br />
                        </div>
                        <Link to="/pergunta4"><button className="btn btn-dark btn-lg my-5 col-6" type="button">Responder</button></Link>
                    </div>
                </div>
            </div>
            );
        };