import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import StopwatchControls from './components/stopwatchControls';
import StopwatchDisplay from './components/stopwatchDisplay';

const StopperScreen: React.FC = () => {
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
    if (!isRunning) {
      const startTime = Date.now() - time;
      startTimeRef.current = startTime;

      intervalRef.current = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        setTime(elapsedTime);
      }, 1);

      setIsRunning(true);
    }
  };

  const stopStopwatch = () => {
    if (isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      isServeRef.current = false; 
    }
  };

  const resetStopwatch = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTime(0);
    setIsRunning(false);
    isServeRef.current = true; 
  };

  return (
    <View style={styles.container}>
      <StopwatchDisplay time={time} isServe={isServeRef.current} />
      <StopwatchControls
        isRunning={isRunning}
        onStart={startStopwatch}
        onStop={stopStopwatch}
        onReset={resetStopwatch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default StopperScreen;
