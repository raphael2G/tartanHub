import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StopwatchDisplayProps {
  time: number;
  isServe: boolean;
  isRunning: boolean;
}

const formatTime = (time: number, isServe: boolean, isRunning: boolean) => {
  const milliseconds = time % 1000;
  const seconds = Math.floor(time / 1000);

  if (isRunning || isServe) {
    return `${seconds.toString()}`;
  } else {
    return `${seconds.toString()}.${milliseconds.toString().padStart(3, '0')}`; 
  }
};

const StopwatchDisplay: React.FC<StopwatchDisplayProps> = ({ time, isServe, isRunning }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(time, isServe, isRunning)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  time: {
    fontSize: 128,
    color: "white",
  },
});

export default StopwatchDisplay;
