
import { useState, useEffect,useRef  } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

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

    
    // useEffect(()=> {
    //   (async () => {
    //     const response = await fetch("https://opentdb.com/api.php?amount="+
    //       Amount+"&category=9&difficulty="+Difficulty+"&type="+Type);
    //       const data = await response.json();
          
    //       console.log((data.results))
    //       if(data.response_code==0){
    //         setData(JSON.parse(JSON.stringify(data.results)));
    //       }
    //       setData(data.results)
    //     })();
    //   },[data])
   
    async function fetchData(){
      const response=await fetch("https://opentdb.com/api.php?amount="+Amount+
          "&category=9&difficulty="+Difficulty+"&type="+Type);
      const data=await response.json();
      setData(data);
      
    }
    console.log(data)
   
    fetchData()
    
    
    console.log((data.results))



      
    const navigateTo = useNavigate();
    const quizStart = () => {
     
      if(data.length!==0||data!==undefined){
          navigateTo('/',{state:
            {   
              JsonData:data.results,
            }
          }
        );
      }
    };
    return (
      <div>
        { <button type="button" ref={buttonRef} style={{ display: 'none' }} onClick={quizStart}  >
        </button> }
      </div>
    );
  
  
};
export default Fetch;
