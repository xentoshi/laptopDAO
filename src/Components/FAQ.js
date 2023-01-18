import React, { useState } from 'react';



function FAQ() {
  const [questions, setQuestions] = useState([
    { question: '✅ How can I donate?', answer: 'Currently, we are handling donations manually. You can contact us on Discord or Twitter and let us know how many laptops you would like to donate and where you are located, and we will proceed from there.' },
{ question: '✅ Do you accept funds?', answer: 'At the moment, we are accepting donations of laptops (can be new laptops, too) rather than funds. You can donate 1, 2, 3... laptops. However, that may change in the future as we establish our structure and build a strong community and trust.' },
{ question: '✅ Where do you find the right candidates?', answer: 'We find candidates through Twitter, the community, word of mouth, and friends of friends. We also post an application form on Twitter and review the responses.' },
{ question: '✅ How can I help?', answer: 'You can join us on Discord and Twitter. If you want to improve something -- do it.' }
  ]);

  const toggleAnswer = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].showAnswer = !newQuestions[index].showAnswer;
    setQuestions(newQuestions);
  }

  return (
    <div className="faq-container">
      {questions.map((question, index) => (
        <div className="question-container" key={index}>
          <div className="question" onClick={() => toggleAnswer(index)}>
            {question.question}
          </div>
          {question.showAnswer && <div className="answer">{question.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;