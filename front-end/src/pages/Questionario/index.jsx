import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import QuestionPage from '../../componentes/QuestionPage';
import { Navbar } from '../../componentes/Navbar';
import { useAuth,login,getUserEmail } from '../../auth';
import { Spinner } from 'react-bootstrap';
import Loading from '../../componentes/Loading';


const questions = [
  { id: 'q1', question: 'Pergunta 1', p: 'Qual é a sua renda mensal?', alt1: 'Acima de sete salários mínimos', alt2: 'Acima de cinco salários mínimos', alt3: 'Acima de três salários mínimos', alt4: 'Acima de um salário mínimo', alt5: 'Abaixo de um salário mínimo' },
  { id: 'q2', question: 'Pergunta 2', p: 'Qual seu grau de escolaridade?', alt1: 'Nenhum', alt2: 'Ensino Fundamental incompleto', alt3: 'Ensino Fundamental completo', alt4: 'Ensino Médio incompleto', alt5: 'Ensino Médio completo ou superior' },
  { id: 'q3', question: 'Pergunta 3', p: 'O quão perto você mora de um projeto da Petrobras?', alt1: 'Muito próximo', alt2: 'Razoavelmente próximo', alt3: 'Longe', alt4: 'Bem longe', alt5: 'Não sei' },
  { id: 'q4', question: 'Pergunta 4', p: 'Você conhece o projeto da Petrobras próxima da sua casa?', alt1: 'Muito', alt2: 'Pouco', alt3: 'Muito Pouco', alt4: 'Neutro', alt5: 'Não' },
  { id: 'q5', question: 'Pergunta 5', p: 'Você está satisfeito com o projeto da Petrobras?', alt1: 'Muito', alt2: 'Pouco', alt3: 'Muito Pouco', alt4: 'Neutro', alt5: 'Não'},
  { id: 'q6', question: 'Pergunta 6', p: 'O projeto trás de alguma forma prejuízo para você?',alt1: 'Muito', alt2: 'Pouco', alt3: 'Muito Pouco', alt4: 'Neutro', alt5: 'Não' },
  { id: 'q7', question: 'Pergunta 7', p: 'O projeto alterou de alguma forma o meio-ambiente próximo?', alt1: 'Muito', alt2: 'Pouco', alt3: 'Muito Pouco', alt4: 'Neutro', alt5: 'Não' },
  { id: 'q8', question: 'Pergunta 8', p: 'Você gostaria de participar de alguma forma no projeto?', alt1: 'Muito', alt2: 'Pouco', alt3: 'Muito Pouco', alt4: 'Neutro', alt5: 'Não' },
  { id: 'q9', question: 'Pergunta 9', p: 'Você acha que a Petrobras e seu projeto são bem-vindos na região?', alt1: 'Muito', alt2: 'Pouco', alt3: 'Muito Pouco', alt4: 'Neutro', alt5: 'Não' },
  { id: 'q10', question: 'Pergunta 10', p: 'A qualidade de vida melhorou com o começo do projeto?', alt1: 'Muito', alt2: 'Pouco', alt3: 'Muito Pouco', alt4: 'Neutro', alt5: 'Não' }
];
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export function LoggedInAcessar () {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '' });
  const navigate = useNavigate();
  const email = getUserEmail();
  const [loading, setLoading] = useState(false);
  const respondeuTrue = {
    respondeu: true
    
};

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
    
    
    const tokenString = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
    const tokenObject = JSON.parse(tokenString);
    const accessToken = tokenObject.access_token;           // temos que fazer isso pois o local storage armazena também o email do usuario logado
    const requestOptions = {
      method: "POST",
      headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(answers)
      
  };
  const requestOptions2 = {
    method: "PUT",
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(respondeuTrue)
  };
  console.log(answers)
  fetch('http://localhost:5000/questionario/questionario', requestOptions)
  .then(async res => {
    const data = await res.json();
    if (res.ok) {
        fetch(`http://localhost:5000/auth/cadastro/${email}`, requestOptions2)
        setLoading(true)
        await sleep(1400);
        window.location.reload();
        
    } else {
        
    }
    
  })
  .then(data=>console.log(data))
  .catch(err =>console.log(err))

  
  };

  return (
    
      <div className="tudo div-master">
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
                <br></br>
                {loading && <Loading/ >}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

const LoggedOutAcessar = () => {
  return (
      <div className="tudo div-master">
          <div className="div-container gradient-background div-master">
              <div className="main-div justified-center my-5 round-corner">
                  <div className="container" id="container-home">
                      <h1 className="my-4" id="h1-home">Você precisa estar logado para acessar esta página</h1>
                      <Link to="/login">Login</Link>
                      <h2 className="my-4">caso não possua cadastro realize-o</h2>                
                      <Link to="/cadastro">Cadastre-se</Link>
                  </div>
              </div>
          </div>
      </div>

  )
};
const AcessarAdmin = () => {
  return (
      <div className="tudo div-master">
          <div className="div-container gradient-background div-master">
              <div className="main-div justified-center my-5 round-corner">
                  <div className="container" id="container-home">
                      <h1 className="my-4" id="h1-home">Você é admininstrador e não pode responder o questionário</h1>
                      <Link to="/acessarrespostas">Acessar respostas</Link>
                      
                  </div>
              </div>
          </div>
      </div>

  )
};
const Respondido = () => {
  return (
      <div className="tudo div-master">
          <div className="div-container gradient-background div-master">
              <div className="main-div justified-center my-5 round-corner">
                  <div className="container" id="container-home">
                      <h1 className="my-4" id="h1-home">Obrigado por responder o questionario!</h1>
                      <Link to="/">Home</Link>
                      
                  </div>
              </div>
          </div>
      </div>

  )
};

export function Questionario() {

  const [logged] = useAuth();
  const [respondeu, setRespondeu] = useState(null);
  const [ehadmin, setEhadmin] = useState(false);

  useEffect(() => {
      if (logged) {
          fetch('http://localhost:5000/auth/check/' + getUserEmail())
              .then(res => res.json())
              .then(data => {
                  if (data.respondeu !== undefined) {
                      setRespondeu(data.respondeu);
                  }
                  if (data.ehadmin!== undefined) {
                    setEhadmin(data.ehadmin);
                  }
              })
              .catch(err => console.log(err));
      }
  }, [logged]);

  return (
      <>

          <Navbar />

      {ehadmin && <AcessarAdmin />}
      {!logged && <LoggedOutAcessar />}
      {logged && respondeu === false && <LoggedInAcessar />}
      {logged && respondeu === true && <Respondido />}


      </>
  );
}