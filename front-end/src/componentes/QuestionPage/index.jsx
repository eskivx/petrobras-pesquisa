import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

function QuestionPage({ question, answer, onAnswerChange }) {

  const handleChange = (e) => {
    onAnswerChange(question.id, e.target.value);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <h3>{question.p}</h3>
      <Form>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={question.id}
            label={question.alt1}
            value={question.alt1}
            name={question.id}
            onChange={handleChange}
          />
          <Form.Check // prettier-ignore
            type={type}
            id={question.id}
            label={question.alt2}
            value={question.alt2}
            name={question.id}
            onChange={handleChange}
          />
          <Form.Check // prettier-ignore
            type={type}
            id={question.id}
            label={question.alt3}
            value={question.alt3}
            name={question.id}
            onChange={handleChange}
          />
          <Form.Check // prettier-ignore
            type={type}
            id={question.id}
            label={question.alt4}
            value={question.alt4}
            name={question.id}
            onChange={handleChange}
          />
          <Form.Check // prettier-ignore
            type={type}
            id={question.id}
            label={question.alt5}
            value={question.alt5}
            name={question.id}
            onChange={handleChange}
          />

          
        </div>
      ))}
    </Form>
      
      
      
      {/* <input type="radio" id="vermelho" name="cor" value={question.alt1} onChange={handleChange} />
      <label htmlFor="vermelho">{question.alt1}</label><br />
      <input type="radio" id="vermelho" name="cor" value={question.alt2} onChange={handleChange} />
      <label htmlFor="vermelho">{question.alt2}</label><br />
      <input type="radio" id="vermelho" name="cor" value={question.alt3} onChange={handleChange} />
      <label htmlFor="vermelho">{question.alt3}</label><br />
      <input type="radio" id="vermelho" name="cor" value={question.alt4} onChange={handleChange} />
      <label htmlFor="vermelho">{question.alt4}</label><br />
      <input type="radio" id="vermelho" name="cor" value={question.alt5} onChange={handleChange} />
      <label htmlFor="vermelho">{question.alt5}</label><br /> */}


    </div>
  );
}

export default QuestionPage;