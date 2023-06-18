import React ,{useContext, useState}from "react";
import colorContext from "../context/context";


const Welcome = () => {
    const {mode,morning, night, twilight} = useContext(colorContext);
    const [modeCount, setModeCount] = useState(1);


     function changeMode(){
         if(modeCount === 1){
             night()
             setModeCount(2)
         }
        else if(modeCount === 2){
            twilight()
            setModeCount(3)
        }
        else if(modeCount === 3){
            morning()
            setModeCount(1)
        }
     }
 
    return(
        <div>
            <div style={{backgroundColor:mode.background, color: mode.color, border: mode.border, textAlign: mode.textAlign}}>
                <h1>Welcome to the Context API</h1>
                <button>Explore More</button>
            </div>
            <br/>  <br/>
            <button onClick={changeMode}>Change To {modeCount==1?"Night": modeCount==2?"Twilight": "Morning"} Mode </button>
        </div>
    )
}

export default Welcome;