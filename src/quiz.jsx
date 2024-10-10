import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Quiz=(quizData)=>{
    const location = useLocation();
    const {JsonData}=location.state||{};

    const[ questionNumber,setQNO]=useState(0);
    const maxQNO=JsonData.length;
    console.log(maxQNO)
    return(
        <div>
            {console.log(JsonData[questionNumber])}
        </div>
    );
}
export default Quiz;