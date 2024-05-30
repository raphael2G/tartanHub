import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView, TapGestureHandler, State } from 'react-native-gesture-handler';


interface StopwatchControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

const StopwatchControls: React.FC<StopwatchControlsProps> = ({ isRunning, onStart, onStop, onReset }) => {
  
  const handleResetButtonStateChange = (e: any) => {
    if (e.nativeEvent.state === State.BEGAN) {
      onReset();
    }
  };

  const handleStopStartButtonStateChange = (e: any) => {
    if (e.nativeEvent.state === State.BEGAN) {
      if (isRunning) {onStop();} 
      else {onStart();}
    }
  }

  // This creates the reset button and the start/stop buttons
  return (
    <GestureHandlerRootView style={styles.container}>

      {/* Reset Button */}
      <TapGestureHandler  onHandlerStateChange={handleResetButtonStateChange}>
        <View 
          style={[styles.button, isRunning ? styles.resetButtonOutline : styles.resetButtonFilled]} 
        >
          <Text style={styles.buttonText}>Reset</Text>
        </View>
      </TapGestureHandler>


      {/* Start/Stop Button */}
      <TapGestureHandler onHandlerStateChange={handleStopStartButtonStateChange}>
        <View style={[styles.button, styles.startButton]} >
          <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
        </View>
      </TapGestureHandler>

    </GestureHandlerRootView>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    backgroundColor: "blue"
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100
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
