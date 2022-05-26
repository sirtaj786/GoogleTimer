import React, { useEffect, useState } from 'react'
import "../component/timer.css"

const Timer = () => {
    const[seconds,setSeconds]=useState(0);
    const[minutes,setMinutes]=useState(0)
    const[mminutes,setMminutes]=useState(0)
    var timer;
    useEffect(()=>{
         timer=setInterval(()=>{
            setSeconds(seconds+1);
            if(seconds===59){
                setMinutes(minutes+1);
                setSeconds(0)
            }
            else if(minutes===59){
                setMminutes(mminutes+1);
                setSeconds(0);
                setMinutes(0)
            }

        },100)
        return()=>clearInterval(timer)
    })
    const restart=()=>{
        setSeconds(0);
        setMinutes(0);
        setMminutes(0)

    }
    const stop=()=>{
    clearInterval(timer)
    }
  return (
    <div className='timer'>
        <div className='container'>
            <div className='timer_container'>
                <h1>Timer</h1>
                <h1>{mminutes<10?"0"+mminutes:mminutes}:{minutes<10?"0"+minutes:minutes}: {seconds<10?"0"+seconds:seconds}</h1>
                <button className='restart' onClick={restart}>Restart</button>
                <button className='stop' onClick={stop}>Stop</button>
            </div>
        </div>
    </div>
  )
}

export default Timer