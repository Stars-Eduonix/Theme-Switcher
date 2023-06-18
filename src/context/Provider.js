import React, { useState } from 'react';
import colorContext from './context';


let morningMode= {color: "black", background: "white", border: "1px solid black", textAlign:"center"}


const Provider = (props) => {
    let [mode, setMode] = useState( morningMode);


    return (
        <colorContext.Provider value={
            {
                mode: mode,
                morning: ()=>setMode(morningMode),
                night: ()=>setMode({...mode, color: "white", background: "black", border: "1px solid green", textAlign:"right"}),
                twilight: ()=>setMode({...mode, color: "white", background: "blue", border: "1px solid red", textAlign:"left"}),
          }
        }>
            {props.children}
        </colorContext.Provider>
    )
}

export default Provider;