
import { useState, useEffect,useRef  } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Quiz from './quiz';

const Fetch = () => {
    const location = useLocation();
    const{Amount,Difficulty,Type}=location.state||{};
    const [data, setData] = useState([]);

    const buttonRef = useRef(null);

    useEffect(() => {
      // Simulate a button click on window load
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, []);

    
    useEffect(()=> {
      (async () => {
        const response = await fetch("https://opentdb.com/api.php?amount="+
          Amount+"&category=9&difficulty="+Difficulty+"&type="+Type);
          const data = await response.json();
          
          console.log((data.results))
          if(data.response_code==0){
            setData(JSON.parse(JSON.stringify(data.results)));
          }
          setData(data.results)
        })();
      },[])
   
    
    const navigateTo = useNavigate();
    const quizStart = (dataj) => {
      if(dataj.length!==0||dataj!==undefined){
          navigateTo('/quiz',{state:
            {   
              JsonData:dataj.length>0?dataj:null,
            }
          }
        );
      }
    };
    return (
      <div>
        {data?quizStart(data):<p>

          loading
        </p>
          }
      </div>
    );
  
  
};
export default Fetch;
