import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface StopwatchControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

const StopwatchControls: React.FC<StopwatchControlsProps> = ({ isRunning, onStart, onStop, onReset }) => {
  
  // This creates the reset button and the start/stop buttons
  return (
    <View style={styles.container}>

      {/* Reset Button */}
      <TouchableOpacity 
        style={[styles.button, isRunning ? styles.resetButtonOutline : styles.resetButtonFilled]} 
        onPressIn={onReset} 
        disabled={isRunning}
        activeOpacity={1}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      {/* Start/Stop Button */}
      <TouchableOpacity 
        style={[styles.button, styles.startButton]} 
        onPressIn={isRunning ? onStop : onStart}
        activeOpacity={1}
      >
        <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  startButton: {
    backgroundColor: 'green',
  },
  resetButtonFilled: {
    backgroundColor: '#007BFF',
  },
  resetButtonOutline: {
    borderColor: '#007BFF',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default StopwatchControls;
