import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface StopwatchControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

const StopwatchControls: React.FC<StopwatchControlsProps> = ({ isRunning, onStart, onStop, onReset }) => {
  return (
    <View style={styles.container}>
      <Button title={isRunning ? "Stop" : "Start"} onPress={isRunning ? onStop : onStart} />
      <Button title="Reset" onPress={onReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
});

export default StopwatchControls;
