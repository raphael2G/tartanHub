import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { GestureHandlerRootView, TapGestureHandler, State } from 'react-native-gesture-handler';



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

  return false ? `${seconds.toString()}` : `${seconds.toString()}.${milliseconds.toString().padStart(3, '0')}`;
};



const StopwatchDisplay: React.FC<StopwatchDisplayProps> = ({ time, isServe, isRunning, onStart, onStop }) => {
  
  const handleScreenStateChange = (e: any) => {
    if (e.nativeEvent.state === State.BEGAN) {
      if (isRunning) {onStop();} 
      else {onStart();}
    }
  }
  
  return (
    <GestureHandlerRootView >
      <TapGestureHandler  onHandlerStateChange={handleScreenStateChange}>
        <View style={styles.container}>
          <Text style={styles.time}>{formatTime(time, isServe)}</Text>
        </View>
      </TapGestureHandler>
    </GestureHandlerRootView>
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
    top: "35%"
  },
  time: {
    fontSize: 48,
    color: 'blue',
  },
});

export default StopwatchDisplay;
