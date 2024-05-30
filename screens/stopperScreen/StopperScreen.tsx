import { StyleSheet, View } from 'react-native';
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

  const startTouchDisplay = () => {
    startStopwatch();
  };

  const stopTouchDisplay = () => {
    stopStopwatch();
  };

  const startButton = () => {
    startStopwatch();
  };

  const stopButton = () => {
    stopStopwatch();
  };

  return (
      <View style={styles.container}>
        <StopwatchDisplay 
          time={time} 
          isServe={isServe} 
          isRunning={isRunning}
          onStart={startTouchDisplay}
          onStop={stopTouchDisplay}
        />
        <StopwatchControls
          isRunning={isRunning}
          onStart={startButton}
          onStop={stopButton}
          onReset={resetStopwatch}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
  touchableArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 20,
  },
});

export default StopperScreen;

