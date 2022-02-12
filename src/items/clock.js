import React, {useState} from "react";
import "./clock.css";

const Clock = () => {
    
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(updateTime, 1000);

  return(
    <div className="clock">
        <div className='display'>
            <h1> {ctime} </h1>
        </div>
    </div>
  );
}

export default Clock;