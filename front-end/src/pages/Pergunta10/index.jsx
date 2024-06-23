import '../../index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar } from '../../componentes/Navbar';

export function Pergunta10() {
    return (
            <>
            <Navbar/>
            <div className="div-container gradient-background div-master">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container" id="container-home">
                        <h1 className="my-4" id="h1-home">Pesquisa</h1>
                        <p>A qualidade de vida melhorou com o começo do projeto?</p>
                        <div>
                            <input type="radio" id="vermelho" name="cor" value="vermelho" />
                            <label htmlFor="vermelho">Não</label><br />
                        </div>
                        <div>
                            <input type="radio" id="azul" name="cor" value="azul" />
                            <label htmlFor="azul">Muito pouco</label><br />
                        </div>
                        <div>
                            <input type="radio" id="verde" name="cor" value="verde" />
                            <label htmlFor="verde">Pouco</label><br />
                        </div>
                        <div>
                            <input type="radio" id="amarelo" name="cor" value="amarelo" />
                            <label htmlFor="amarelo">Sim</label><br />
                        </div>
                        <div>
                            <input type="radio" id="roxo" name="cor" value="roxo" />
                            <label htmlFor="roxo">Muito</label><br />
                        </div>
                        <div className='width100'>
                        <Link to="/pergunta9"><button className="btn btn-outline-secondary btn-lg my-5 col-6" type="button">Voltar</button></Link>
                        <Link to="/pesquisa"><button className="btn btn-dark btn-lg my-5 col-6" type="button">Responder</button></Link>
                        </div>
                        </div>
                </div>
            </div>
            </>
            );
        };