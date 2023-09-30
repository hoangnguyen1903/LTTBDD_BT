import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import lock from '../assets/lock.png';
import mail from '../assets/mail.png';

const PasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image style={{ width: '105px', height: '117px' }} source={lock} />
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
          Forget
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
          Password
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
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View
        style={{
          marginTop: '20px',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={mail} style={{ width: '48px', height: '48px' }} />
        <TextInput
          style={{
            flex: 1,
            width: '100%',
            paddingLeft: '10px',
            paddingVertical: '14px',
            backgroundColor: '#C4C4C4',
            fontWeight: 'bold',
            fontSize: '15px',
            borderLeftWidth: '1px',
            borderStyle: 'solid',
            borderLeftColor: '#C4C4C4',
          }}
          placeholder="Email"
        />
      </View>
      <View style={{ marginTop: '45px' }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Next</Text>
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
    marginBottom: '52px',
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
});

export default PasswordScreen;
