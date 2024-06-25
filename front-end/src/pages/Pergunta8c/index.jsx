import '../../index.css'
// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-petrobras.svg';
import logo2 from '../../../../images/nome-petrobras.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Navbar} from '../../componentes/Navbar'

import React, { useState } from 'react';

export function RadioInputExample() {
  // Estado para armazenar o valor selecionado
  const [selectedValue, setSelectedValue] = useState('');

  // Função para atualizar o estado com o valor selecionado
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // Função para lidar com o envio do formulário (opcional)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Valor selecionado:", selectedValue);
    // Aqui você pode enviar o valor selecionado para onde precisar
    // Exemplo: enviarParaServidor(selectedValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={selectedValue === 'male'}
          onChange={handleRadioChange}
        /> Masculino
      </label><br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={selectedValue === 'female'}
          onChange={handleRadioChange}
        /> Feminino
      </label><br />
      <label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={selectedValue === 'other'}
          onChange={handleRadioChange}
        /> Outro
      </label><br />
      <br />
      <button type="submit">Salvar</button>
    </form>
  );
}
