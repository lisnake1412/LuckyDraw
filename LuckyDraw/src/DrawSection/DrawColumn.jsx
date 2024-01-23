import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import abp from "../assets/abp.png"

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function DrawColumn({constNumber, maxNumber}) {
  const { isRunning } = useContext(AppContext);
  const [prevNums, setNums] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  
  
  useEffect(() => {
    setNums((prevNums) => {
      let newNumsArray = prevNums.sort(() => Math.random() * 2 - 1);

      if (constNumber !== undefined) {
        // Remove constNumber if it already exists in newNumsArray
        newNumsArray = newNumsArray.filter((num) => num !== constNumber);

        // Add constNumber at the beginning
        newNumsArray.unshift(constNumber);
      }
      if (maxNumber !== undefined) {
        // Remove maxNumber if it already exists in newNumsArray
        newNumsArray = newNumsArray.filter((num) => num !== maxNumber);

        // Add maxNumber at the beginning
        newNumsArray.unshift(maxNumber);
      }

      return newNumsArray;
    });
  }, [isRunning]);
  return (
    <div className={'draw-column' + (isRunning ? ' running' : '' )}>
      <div className="draw-column-inner" data-running={isRunning} style={{animationDelay: 100}}>
        {/* {
          isRunning && 
          nums.sort(()=> Math.random()*2 - 1).map((num, i) => <div className="number" key={i} >
            {num}
          </div>)
        }
        {
          !isRunning &&
          nums.map((num, i) => <div className="number" key={i}>
            <img style={{width: '60%', opacity: 0.5}} src={abp}></img>
          </div>)
        } */}
        {prevNums.map((num, i) => <div className="number"  key={i} >
            {num}
          </div>)}
      </div>   
      <div className="draw-column-inner" data-running={isRunning} style={{animationDelay: 100}}>
        {/* {
          isRunning && 
          nums.sort(()=> Math.random()*2 - 1).map((num, i) => <div className="number" key={i} >
            {num}
          </div>)
        }
        {
          !isRunning &&
          nums.map((num, i) => <div className="number" key={i}>
            <img style={{width: '60%', opacity: 0.5}} src={abp}></img>
          </div>)
        } */}
        {prevNums.map((num, i) => <div className="number"  key={i} >
            {num}
          </div>)}
      </div>       
    </div>
  );
}

export default DrawColumn;