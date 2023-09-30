import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import lock from '../assets/lock.png';
import mail from '../assets/mail.png';

const CodeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={{ fontSize: '60px', fontWeight: 'bold' }}>CODE</Text>
      </View>
      <Text
        style={{
          color: '#000',
          fontSize: '20px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginTop: '62px',
        }}
      >
        Verification
      </Text>
      <View style={{ width: '100%', marginHorizontal: 'auto', marginTop: '42px' }}>
        <Text
          style={{
            color: '#000',
            fontSize: '15px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Enter ontime password sent on
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: '15px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          ++849092605798
        </Text>
      </View>
      <View
        style={{
          marginTop: '30px',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={{ marginTop: '34px' }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Verify code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00CCF9',
    paddingHorizontal: '25px',
  },
  center: {
    marginTop: '105px',
    marginHorizontal: 'auto',
  },
  btn: {
    width: '100%',
    height: '48px',
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: '#000',
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  box: {
    width: '50px',
    height: '50px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#000',
  },
});

export default CodeScreen;
