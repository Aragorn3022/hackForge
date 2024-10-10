import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Quiz=(quizData)=>{
    const location = useLocation();
    const {JsonData}=location.state||{};
    const[ questionNumber,setQNO]=useState(0);
    const maxQNO=JsonData.length;
    console.log(JsonData)

    const correctAnswer=JsonData[questionNumber].correct_answer;
    const incorrectAnswers=JsonData[questionNumber].incorrect_answers;
    const [answerChoices, setAnswerChoices] = useState([]);
    
    const[correct_answersNO,setcorrect_answersNO]=useState(0);

    // Function to jumble the answer choices randomly
    const jumbleAnswers = () => {
      const allAnswers = [correctAnswer, ...incorrectAnswers];
      const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
      setAnswerChoices(shuffledAnswers);
    };

    // Call the jumbleAnswers function on component mount
    useEffect(() => {
      jumbleAnswers();
    }, [correctAnswer, incorrectAnswers]);
    const updateqno=()=>{
        if(questionNumber<maxQNO-1){
            setQNO(questionNumber+1)
        }
        console.log(questionNumber)
    }
    const decqno=()=>{
        if(questionNumber>0){
            setQNO(questionNumber-1)
        }
        console.log(questionNumber)
    }

    return(
        <div>
            {JsonData[questionNumber].question.replaceAll('&quot;',"'")}
            <br />
            {answerChoices.map((answer, index) => (
                
                <button type='radio' key={index}>{answer} 
                </button>
            ))}
            <br />
            <button type="button" onClick={updateqno}>
                Next
            </button>
            <button type="button" onClick={decqno}>
                Previous
            </button>
        </div>
    );
}
export default Quiz;