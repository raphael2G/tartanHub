import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import StopwatchControls from './components/stopwatchControls';
import StopwatchDisplay from './components/stopwatchDisplay';
import useStopwatch from './components/useStopwatch';

const StopperScreen: React.FC = () => {
  const {
    time,
    isRunning,
    isServe,
    startStopwatch,
    stopStopwatch,
    resetStopwatch,
  } = useStopwatch();


  return (
    <View style={styles.container}>
      <StopwatchDisplay time={time} isServe={isServe} />
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
