import React, { useState } from "react";
import Sample from "./sample";

const StateInFC = () => {
  /**
   * const [state, setState] = useState(initialize)
   */
  
  const [message, setMessage] = useState('State in Fucntion Components')
  const [isVisible, setIsVisible] = useState(false)


  const addMessageHandler = ()=> {
    setMessage(message + ', Added new message')
  }
  const toggleShowHandler = ()=> {
    setIsVisible(!isVisible)
  }

  return (
    <div>
      <button onClick={toggleShowHandler}>Toggle Show</button>
      <button onClick={addMessageHandler}>Add Message</button>
      <button onClick={()=>{console.clear()}}>Clear Console</button>
      {isVisible && <Sample message={message}/>}
    </div>
  );
};

export default StateInFC;
