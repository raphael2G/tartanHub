import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';


interface StopwatchDisplayProps {
  time: number;
  isServe: boolean;
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
}

const formatTime = (time: number, isServe: boolean) => {
  const milliseconds = time % 1000;
  const seconds = Math.floor(time / 1000);

  return isServe ? `${seconds.toString()}` : `${seconds.toString()}.${milliseconds.toString().padStart(3, '0')}`;
};

const StopwatchDisplay: React.FC<StopwatchDisplayProps> = ({ time, isServe, isRunning, onStart, onStop }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPressIn={isRunning ? onStop : onStart}
      activeOpacity={1}
    >
      <Text style={styles.time}>{formatTime(time, isServe)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    position: 'relative',
  },
  time: {
    fontSize: 48,
    color: 'blue',
  },
});

export default StopwatchDisplay;
