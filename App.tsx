import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.midContainer}>
      <View style={styles.container}>
        <Text style={styles.textContainer} >#Crushingit</Text>
        <StatusBar style="auto" />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red'
  },
  textContainer: {
    color: 'white',
    backgroundColor: 'red',
    fontSize: 40
  },
  outerContainer:{
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  },
  midContainer:{
    flex:1,
    backgroundColor: 'black',
    padding: 20
  }
}
);
