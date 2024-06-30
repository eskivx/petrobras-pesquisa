import React from 'react';

function QuestionPage({ question, answer, onAnswerChange }) {
  const handleChange = (e) => {
    onAnswerChange(question.id, e.target.value);
  };

  return (
    <div>
    <h2>{question.question}</h2>
    <h3>{question.p}</h3>
    <input type="radio" id="vermelho" name="cor"  value={1} onChange={handleChange} />
    <label htmlFor="vermelho">{question.alt1}</label><br />
    <input type="radio" id="vermelho" name="cor"  value={2} onChange={handleChange} />
    <label htmlFor="vermelho">{question.alt2}</label><br />
    <input type="radio" id="vermelho" name="cor"  value={3} onChange={handleChange} />
    <label htmlFor="vermelho">{question.alt3}</label><br />
    <input type="radio" id="vermelho" name="cor"  value={4} onChange={handleChange} />
    <label htmlFor="vermelho">{question.alt4}</label><br />
    <input type="radio" id="vermelho" name="cor"  value={5} onChange={handleChange} />
    <label htmlFor="vermelho">{question.alt5}</label><br />
    

  </div>
  );
}

export default QuestionPage;