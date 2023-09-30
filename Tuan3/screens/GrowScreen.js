import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import ellipse from '../assets/ellipse.png';

const GrowScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image style={{ width: '140px', height: '140px' }} source={ellipse} />
      </View>
      <View style={{ width: '220px', height: '58px', marginHorizontal: 'auto' }}>
        <Text
          style={{
            color: '#000',
            fontSize: '25px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Grow
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: '25px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Your Business
        </Text>
      </View>
      <View style={{ marginTop: '62px', marginHorizontal: 'auto' }}>
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontSize: '15px',
            fontWeight: '700',
            width: '320px',
          }}
        >
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={{ marginTop: '45px', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: '21px', marginHorizontal: 'auto' }}>
        <Text style={{ textTransform: 'uppercase', fontSize: '18px', fontWeight: 'bold' }}>
          How we work?
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00CCF9',
  },
  center: {
    marginTop: '105px',
    marginHorizontal: 'auto',
    marginBottom: '52px',
  },
  btn: {
    width: '119px',
    height: '48px',
    backgroundColor: '#E3C000',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: '#000',
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default GrowScreen;
