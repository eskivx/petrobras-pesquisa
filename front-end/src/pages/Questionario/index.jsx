import React, { useState } from 'react';
import QuestionPage from '../../componentes/QuestionPage';
import { Navbar } from '../../componentes/Navbar';


const questions = [
  { id: 'q1', question: 'Pergunta 1', p: 'Qual é a sua renda mensal?', alt1: 'Acima de sete salários mínimos', alt2: 'Acima de cinco salários mínimos', alt3: 'Acima de três salários mínimos', alt4: 'Acima de um salário mínimo', alt5: 'Abaixo de um salário mínimo'},
  { id: 'q2', question: 'Pergunta 2?', p:'blablabla' },
  { id: 'q3', question: 'Pergunta 3?' },
  { id: 'q4', question: 'Pergunta 4?' },
  { id: 'q5', question: 'Pergunta 5?' },
  { id: 'q6', question: 'Pergunta 1', p: 'Qual é a sua renda mensal?', alt1: 'Acima de sete salários mínimos', alt2: 'Acima de cinco salários mínimos', alt3: 'Acima de três salários mínimos', alt4: 'Acima de um salário mínimo', alt5: 'Abaixo de um salário mínimo'},
  { id: 'q7', question: 'Pergunta 2?', p:'blablabla' },
  { id: 'q8', question: 'Pergunta 3?' },
  { id: 'q9', question: 'Pergunta 4?' },
  { id: 'q10', question: 'Pergunta 5?' }
];

export function Questionario() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '' });

  const handleAnswerChange = (id, answer) => {
    setAnswers({ ...answers, [id]: answer });
  };

  const nextPage = () => {
    if (currentPage < questions.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = () => {
    console.log(answers);
  };

  return (
    <div>
        <div className="tudo div-master">
        <Navbar/>
        <div className="div-container gradient-background div-master">
        <div className="main-div justified-center my-5 round-corner">
        <div className="container py-5" id="container-home">
      <QuestionPage
        question={questions[currentPage]}
        answer={answers[questions[currentPage].id]}
        onAnswerChange={handleAnswerChange}
      />
      <div>
        {currentPage > 0 && <button onClick={prevPage}>Anterior</button>}
        {currentPage < questions.length - 1 && <button onClick={nextPage}>Próxima</button>}
        {currentPage === questions.length - 1 && <button onClick={handleSubmit}>Enviar</button>}
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}


