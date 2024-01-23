import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import DrawColumn from "./DrawColumn";
import "./DrawSection.scss"
function DrawSection({maxNumber}) {
  const { isRunning } = useContext(AppContext);
  const [newRandomNumber, setRandomNumber] = useState(maxNumber)
  useEffect(() => {
    if(isRunning) {
      setRandomNumber(() => {
        return (Math.floor(Math.random()*maxNumber))
      })
    }
  },[isRunning])
  return (
    <div className="draw-section">
      <div className="draw-section-inner">
        <DrawColumn constNumber={2}/>
        <DrawColumn constNumber={0}/>
        <DrawColumn constNumber={2}/>
        <DrawColumn constNumber={4}/>
        <DrawColumn maxNumber={Math.floor(newRandomNumber / 10) % 10}/>
        <DrawColumn maxNumber={newRandomNumber % 10}/>
      </div>
    </div>
  );
}

export default DrawSection;