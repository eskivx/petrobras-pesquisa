import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';

import { Pergunta1 } from '../../componentes/Perguntas/pergunta1';
import { Pergunta2 } from '../../componentes/Perguntas/pergunta2';
import { Pergunta3 } from '../../componentes/Perguntas/pergunta3';
import { Pergunta4 } from '../../componentes/Perguntas/pergunta4';
import { Pergunta5 } from '../../componentes/Perguntas/pergunta5';
import { Pergunta6 } from '../../componentes/Perguntas/pergunta6';
import { Pergunta7 } from '../../componentes/Perguntas/pergunta7';
import { Pergunta8 } from '../../componentes/Perguntas/pergunta8';
import { Pergunta9 } from '../../componentes/Perguntas/pergunta9';
import { Pergunta10 } from '../../componentes/Perguntas/pergunta10';

import { Navbar } from '../../componentes/Navbar';

export function Pesquisa() {
    return (
        <>
        <div className="tudo div-master">
            <Navbar/>
            <Pergunta4/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </div>
        </>
    );
}