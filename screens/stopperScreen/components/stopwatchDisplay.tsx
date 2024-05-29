import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StopwatchDisplayProps {
  time: number;
  isServe: boolean;
}

const formatTime = (time: number, isRunning: boolean) => {
  const milliseconds = time % 1000;
  const seconds = Math.floor(time / 1000);

  return isRunning ? `${seconds.toString()}` : `${seconds.toString()}.${milliseconds.toString().padStart(3, '0')}`;
};

const StopwatchDisplay: React.FC<StopwatchDisplayProps> = ({ time, isServe }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(time, isServe)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  time: {
    fontSize: 48,
    color: "white",
  },
});

export default StopwatchDisplay;
