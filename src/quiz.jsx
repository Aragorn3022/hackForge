import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Quiz=()=>{
    const location = useLocation();
    const {JsonData}=location.state||{};


    return(
        <div>
            {console.log(JsonData)}
        </div>
    );
}
export default Quiz;