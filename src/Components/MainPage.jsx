import React from 'react'
import { useState, useCallback } from 'react';
import {useNavigate} from 'react-router-dom';

const MainPage = () => {

  const [inputVal, setinputVal] = useState("");
  const Navigate=useNavigate();

  const HandleButtonClick = useCallback(()=>{
     Navigate(`/room/${inputVal}`);
  },[Navigate ,inputVal]);

  return (
    <div style={{ display: 'block', margin: "auto", width: "fit-content" }}>

      <input type='text' placeholder='Enter Room ID ' value={inputVal} onChange={(e) => { setinputVal(e.target.value) }} />

      <button onClick={HandleButtonClick}>Join</button>

    </div>
  )
}

export default MainPage