import '../../index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Navbar} from '../../componentes/Navbar';
// import { Pesquisa } from '/../pages/Pesquisa';

export function Pergunta2() {
    return (
            <>
            <div className="tudo div-master">
            <Navbar/>
            <div className="div-container gradient-background div-master">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container" id="container-home">
                        <h1 className="my-4" id="h1-home">Pesquisa</h1>
                        <form>
                        <p>Qual sua escolaridade?</p>
                        <div>
                            <input type="radio" id="vermelho" name="cor" value="vermelho" />
                            <label htmlFor="vermelho">Sem ensino</label><br />
                        </div>
                        <div>
                            <input type="radio" id="azul" name="cor" value="azul" />
                            <label htmlFor="azul">Ensino Fundamental</label><br />
                        </div>
                        <div>
                            <input type="radio" id="verde" name="cor" value="verde" />
                            <label htmlFor="verde">Ensino Médio</label><br />
                        </div>
                        <div>
                            <input type="radio" id="amarelo" name="cor" value="amarelo" />
                            <label htmlFor="amarelo">Ensino Superior</label><br />
                        </div>
                        <div>
                            <input type="radio" id="roxo" name="cor" value="roxo" />
                            <label htmlFor="roxo">Pós-graduado</label><br />
                        </div>
                        <div className='width100'>
                        <Link to="/pesquisa"><button className="btn btn-outline-secondary btn-lg my-5 col-6" type="button">Voltar</button></Link>
                        <Link to="/pergunta3"><button className="btn btn-dark btn-lg my-5 col-6" type="button">Responder</button></Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
            </>
            );
        }