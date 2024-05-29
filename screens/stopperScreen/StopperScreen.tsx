import { StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
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
    console.log("handleScreenPress");
    if (isRunning) {
      stopStopwatch();
    } else {
      startStopwatch();
    }
  }
  

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPressIn={handleScreenPress}>
        <View style={styles.touchableArea}>
          <StopwatchDisplay time={time} isServe={isServe} isRunning={isRunning}/>
        </View>
      </TouchableWithoutFeedback>
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