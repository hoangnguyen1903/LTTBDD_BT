import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.something1}>
        <Text>Something 1</Text>
      </View>
      <View style={styles.something2}>
        <Text>Something 2</Text>
      </View>
      <View style={styles.something3}>
        <Text>Something 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  something1: {
    backgroundColor: 'red',
    color: 'white',
    flex: 1,
  },
  something2: {
    backgroundColor: 'blue',
    color: 'white',
    flex: 1,
  },
  something3: {
    backgroundColor: 'yellow',
    color: 'white',
    flex: 1,
  },
});
