import { useState, useRef, useEffect } from 'react';

const useStopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number | null>(null);
    const isServeRef = useRef<boolean>(true);

    useEffect(() => {
        return () => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        };
    }, []);

    const startStopwatch = () => {
        console.log("startStopwatch");
        if (!isRunning) {
            console.log("in starting if statement");
            const startTime = Date.now() - time;
            startTimeRef.current = startTime;

            intervalRef.current = setInterval(() => {
                console.log("in interval");
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;
                setTime(elapsedTime);
                console.log(elapsedTime - time);
            }, 1);


            setIsRunning(true);
        } else {
          console.log("STARTING BUT ALREADY RUNNING");
        }
    };

    const stopStopwatch = () => { 
      console.log("stop stopwatch");
      setIsRunning(false);

      if (isRunning && intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      if (time >= 1) {
        isServeRef.current = false;
      }
    };

    const resetStopwatch = () => {
        console.log("resetStopwatch");
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsRunning(false);
        setTime(0);
        isServeRef.current = true; 
      };

      return {
        time,
        isRunning,
        isServe: isServeRef.current,
        startStopwatch,
        stopStopwatch,
        resetStopwatch,
      };
    
};

export default useStopwatch;