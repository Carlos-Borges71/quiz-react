import { useContext } from 'react';
import { QuizContext } from '../context/quiz';


import Quiz from '../img/quiz.svg'

import './Welcome.css';

function Welcome() {
  const [quizState, dispatch] = useContext(QuizContext)

  console.log(quizState)

  return (
    <div className="welcome">
        <h2>Sejam bem-vindo</h2>
        <p>clique no boão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome