import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ComponentShaker from './dist';

const App = () => {
  const [isShaking, setIsShaking] = useState(false);

  return (
    <SafeAreaView>
      <ComponentShaker
        isShakeActivate={isShaking}
        onShakeEnd={() => setIsShaking(false)}>
        <View style={styles.shakeView}>
          <Text style={styles.shakeFont}>this is component shaker</Text>
        </View>
      </ComponentShaker>

      <View style={styles.shakeButtonContainer}>
        <TouchableOpacity
          style={styles.shakeButton}
          onPress={() => setIsShaking(true)}>
          <Text>Shake!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  shakeView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    borderWidth: 2,
    borderColor: '#063970',
    borderRadius: 16,
    backgroundColor: '#abdbe3',
  },
  shakeFont: {
    fontSize: 24,
    fontWeight: '600',
  },
  shakeButtonContainer: {
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  shakeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderWidth: 1,
    backgroundColor: '#e28743',
  },
});
