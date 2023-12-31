import React, { useEffect, useRef, useState } from 'react'

const MutableRef = () => {
    const [timer, setTimer] = useState<number>(0);
    const intervalRef = useRef<number | undefined>(undefined);

    const stopTimer = () =>{
        window.clearInterval(intervalRef.current)
    }

    useEffect(() => {
      intervalRef.current = window.setInterval(()=>{
        setTimer((timer:number)=>timer+1)
      },1000)
    
      return () => {
        stopTimer();
      }
    }, [])
    
  return (
    <div>
        Hooktimer - {timer}
        <button onClick={stopTimer}>Stop Timer</button>
    </div>
  )
}

export default MutableRef