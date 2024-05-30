import { View, StyleSheet, TouchableOpacity } from 'react-native';
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

  const handleScreenPress = () => {
    // console.log('Single tap detected');
    if (isRunning) {
      stopStopwatch();
    } else {
      startStopwatch();
    }
  };

  return (
    <TouchableOpacity
      onPressIn={handleScreenPress}
      style={styles.container}>
      <View style={styles.touchableArea}>
        <StopwatchDisplay time={time} isServe={isServe} isRunning={isRunning} />
      </View>
      <View style={styles.controlsContainer}>
        <StopwatchControls
          isRunning={isRunning}
          onStart={startStopwatch}
          onStop={stopStopwatch}
          onReset={resetStopwatch}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
